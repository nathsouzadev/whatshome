import { Controller, Get, HttpCode, Post, Request } from '@nestjs/common';
import { AppService } from './app.service';
import axios from 'axios';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/webhook')
  @HttpCode(200)
  async getHello(@Request() req) {
    console.log('Incoming webhook message:', JSON.stringify(req.body, null, 2));

    // check if the webhook request contains a message
    // details on WhatsApp text message payload: https://developers.facebook.com/docs/whatsapp/cloud-api/webhooks/payload-examples#text-messages
    const message = req.body.entry?.[0]?.changes[0]?.value?.messages?.[0];

    // check if the incoming message contains text
    if (message?.type === 'text') {
      // extract the business number to send the reply from it
      const business_phone_number_id =
        req.body.entry?.[0].changes?.[0].value?.metadata?.phone_number_id;

      // send a reply message as per the docs here https://developers.facebook.com/docs/whatsapp/cloud-api/reference/messages
      try {
        const response = await axios({
          method: 'POST',
          url: `https://graph.facebook.com/v18.0/${business_phone_number_id}/messages`,
          headers: {
            Authorization: `Bearer ${process.env.GRAPH_API_TOKEN}`,
          },
          data: {
            messaging_product: 'whatsapp',
            to: message.from,
            text: { body: 'Echo: ' + message.text.body },
            context: {
              message_id: message.id, // shows the message as a reply to the original user message
            },
          },
        });

        console.log(response);
      } catch (error) {
        console.log(error.message);
      }
    }

    return { message: 'ok' };
  }

  @Get('/webhook')
  async register(@Request() req) {
    console.log(req.query);
    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    // check the mode and token sent are correct
    if (mode === 'subscribe' && token === process.env.WEBHOOK_VERIFY_TOKEN) {
      // respond with 200 OK and challenge token from the request
      console.log('Webhook verified successfully!');
      return challenge;
    } else {
      // respond with '403 Forbidden' if verify tokens do not match
      return { message: 'Error' };
    }
  }
}
