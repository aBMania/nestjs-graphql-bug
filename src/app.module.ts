import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppResolver } from './app.resolver';

@Module({
  imports: [AppResolver],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {}
