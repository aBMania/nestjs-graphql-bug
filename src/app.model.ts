import { InputType, OmitType } from '@nestjs/graphql';

@InputType()
export class AppModel {
  public foo: string
}

@InputType()
export class OmitAppModel extends OmitType(
  AppModel,
  ['foo'],
  InputType,
) {
  public bar: string
}
