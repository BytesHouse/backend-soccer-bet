import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class HttpCustomService {
  constructor(private readonly httpService: HttpService) {}
  public async apiCompetitions() {
    try {
      const response = await firstValueFrom(
        this.httpService.get(
          process.env.API_BASE_URL_FOOTBALL_DATA + 'competitions/',
        ),
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
