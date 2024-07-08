import { Module } from '@nestjs/common';
import { CompetitionService } from './competition.service';
import { CompetitionController } from './competition.controller';
import { ProvidersModule } from 'src/providers/providers.module';
import { HttpCustomService } from 'src/providers/https/http.service';

@Module({
  imports: [ProvidersModule],
  providers: [HttpCustomService, CompetitionService],
  controllers: [CompetitionController],
})
export class CompetitionModule {}
