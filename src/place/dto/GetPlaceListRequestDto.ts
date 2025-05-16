import { IsNumber, IsOptional } from 'class-validator';

export class GetPlaceListRequestDto {
  @IsNumber()
  @IsOptional()
  page?: number = 1;

  @IsNumber()
  @IsOptional()
  limit?: number = 5;
}
