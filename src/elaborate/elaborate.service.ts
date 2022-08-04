import { Injectable } from '@nestjs/common';
import { CreateElaborateDto } from './dto/create-elaborate.dto';
import { UpdateElaborateDto } from './dto/update-elaborate.dto';

@Injectable()
export class ElaborateService {
  create(createElaborateDto: CreateElaborateDto) {
    return 'This action adds a new elaborate';
  }

  findAll() {
    return `This action returns all elaborate`;
  }

  findOne(id: number) {
    return `This action returns a #${id} elaborate`;
  }

  update(id: number, updateElaborateDto: UpdateElaborateDto) {
    return `This action updates a #${id} elaborate`;
  }

  remove(id: number) {
    return `This action removes a #${id} elaborate`;
  }
}
