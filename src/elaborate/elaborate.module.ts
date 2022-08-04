import { Module } from '@nestjs/common';
import { ElaborateService } from './elaborate.service';
import { ElaborateController } from './elaborate.controller';

@Module({
  controllers: [ElaborateController],
  providers: [ElaborateService]
})
export class ElaborateModule {}
