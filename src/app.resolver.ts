import { AppService } from './app.service';
import { Args, Mutation } from '@nestjs/graphql';
import { OmitAppModel } from './app.model';

export class AppResolver {
  constructor(private readonly appService: AppService) {}

  @Mutation()
  getHello(@Args() param: OmitAppModel): string {
    return this.appService.getHello();
  }
}
