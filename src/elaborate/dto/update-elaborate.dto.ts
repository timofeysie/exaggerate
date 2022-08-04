import { PartialType } from '@nestjs/mapped-types';
import { CreateElaborateDto } from './create-elaborate.dto';

export class UpdateElaborateDto extends PartialType(CreateElaborateDto) {}
