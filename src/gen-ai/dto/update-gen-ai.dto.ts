import { PartialType } from '@nestjs/swagger';
import { CreateGenAiDto } from './create-gen-ai.dto';

export class UpdateGenAiDto extends PartialType(CreateGenAiDto) {}
