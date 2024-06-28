import { Controller, Get } from '@nestjs/common';
import { CompetitionService } from './competition.service';
// import { ApiResponse } from 'src/types/competition/competition.type';

@Controller('competition')
export class CompetitionController {
  constructor(private readonly competitionService: CompetitionService) {}
  @Get()
  public async getCompetitions() {
    return this.competitionService.getCompetitions();
  }
}
