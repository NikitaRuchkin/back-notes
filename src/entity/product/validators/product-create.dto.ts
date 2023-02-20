import { IsEmail, IsNotEmpty, ValidateNested } from "class-validator";
import { Type } from "class-transformer";

export class ProductCreateDto {
  @IsEmail()
  thing: string

  @IsNotEmpty()
  bath: number;

  @IsNotEmpty()
  rub: number;

  @IsNotEmpty()
  cad: number;

  @IsNotEmpty()
  usa: number;
}

export class ProductCreateScoreDto {
  @ValidateNested({ each: true })
  @Type(() => ProductCreateDto)
  items: ProductCreateDto[];
}