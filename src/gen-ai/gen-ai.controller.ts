import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GenAiService } from './service/gen-ai.service';
import { CreateGenAiDto } from './dto/create-gen-ai.dto';
import { UpdateGenAiDto } from './dto/update-gen-ai.dto';

@Controller('gen-ai')
export class GenAiController {
  constructor(private readonly genAiService: GenAiService) {}

  @Get()
  findAll() {
    return 1
  }
}
