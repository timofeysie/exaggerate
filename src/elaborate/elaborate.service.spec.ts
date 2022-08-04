import { Test, TestingModule } from '@nestjs/testing';
import { ElaborateService } from './elaborate.service';

describe('ElaborateService', () => {
  let service: ElaborateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ElaborateService],
    }).compile();

    service = module.get<ElaborateService>(ElaborateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
