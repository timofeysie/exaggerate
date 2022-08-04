import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ElaborateModule } from './elaborate/elaborate.module';

@Module({
  imports: [ElaborateModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
