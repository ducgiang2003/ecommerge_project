/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsInt, IsString, Max, Min } from 'class-validator';

export class CreateCatDto {
  @IsString()
  name: string;
  @IsInt()
  @Min(1)
  @Max(12)
  age: number;
  @IsString()
  breed: string;
}
