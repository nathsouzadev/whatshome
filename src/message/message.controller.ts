import {
  Controller,
  Get,
  HttpCode,
  Post,
  Request,
  UnauthorizedException,
} from '@nestjs/common';
import axios from 'axios';

@Controller()
export class MessageController {
  @Post('/message')
  @HttpCode(200)
  async getHello(@Request() req) {
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
      } catch (error) {
        console.log(error.message);
      }
    }

    return { message: 'ok' };
  }

  @Get('/message')
  async register(@Request() req) {
    if (req.query['hub.verify_token'] == process.env.WEBHOOK_VERIFY_TOKEN) {
      return req.query['hub.challenge'];
    }
    throw new UnauthorizedException();
  }
}
