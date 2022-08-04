import { Test, TestingModule } from '@nestjs/testing';
import { ElaborateController } from './elaborate.controller';
import { ElaborateService } from './elaborate.service';

describe('ElaborateController', () => {
  let controller: ElaborateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ElaborateController],
      providers: [ElaborateService],
    }).compile();

    controller = module.get<ElaborateController>(ElaborateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
