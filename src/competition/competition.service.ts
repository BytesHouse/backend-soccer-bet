import { Injectable } from '@nestjs/common';
import { HttpCustomService } from 'src/providers/https/http.service';

@Injectable()
export class CompetitionService {
  constructor(private readonly httpService: HttpCustomService) {}

  public async getCompetitions() {
    return this.httpService.apiCompetitions();
  }
}
