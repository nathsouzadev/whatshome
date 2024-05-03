import { Injectable } from '@nestjs/common';
import { CreateGenAiDto } from '../dto/create-gen-ai.dto';
import { UpdateGenAiDto } from '../dto/update-gen-ai.dto';

@Injectable()
export class GenAiService {
  create(createGenAiDto: CreateGenAiDto) {
    return 'This action adds a new genAi';
  }

  findAll() {
    return `This action returns all genAi`;
  }

  findOne(id: number) {
    return `This action returns a #${id} genAi`;
  }

  update(id: number, updateGenAiDto: UpdateGenAiDto) {
    return `This action updates a #${id} genAi`;
  }

  remove(id: number) {
    return `This action removes a #${id} genAi`;
  }
}
