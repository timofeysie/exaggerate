import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ElaborateService } from './elaborate.service';
import { CreateElaborateDto } from './dto/create-elaborate.dto';
import { UpdateElaborateDto } from './dto/update-elaborate.dto';

@Controller('elaborate')
export class ElaborateController {
  constructor(private readonly elaborateService: ElaborateService) {}

  @Post()
  create(@Body() createElaborateDto: CreateElaborateDto) {
    return this.elaborateService.create(createElaborateDto);
  }

  @Get()
  findAll() {
    return this.elaborateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.elaborateService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateElaborateDto: UpdateElaborateDto) {
    return this.elaborateService.update(+id, updateElaborateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.elaborateService.remove(+id);
  }
}
