import { IsOptional, IsString, IsUUID, MinLength } from 'class-validator';

export class CreateCarDto {
  @IsString()
  readonly brand: string;

  // @IsString({ message: 'This value must be a string' })
  @IsString()
  @MinLength(3)
  readonly model: string;
}

export class UpdateCarDto {
  @IsString()
  @IsUUID()
  @IsOptional()
  readonly id: string;

  @IsString()
  @IsOptional()
  readonly brand?: string;

  @IsString()
  @MinLength(3)
  @IsOptional()
  readonly model?: string;
}
