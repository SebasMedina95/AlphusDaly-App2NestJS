import { ProductImage } from '../entities/product-image.entity';
import {
    IsArray,
    IsDate,
    IsIn,
    IsInt,
    IsNumber,
    IsOptional,
    IsPositive,
    IsString,
    MinLength
} from "class-validator";

export class CreateProductDto {

    @IsInt()
    @IsPositive()
    @IsOptional()
    id?: number;

    @IsString()
    @MinLength(1)
    title: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsNumber()
    @IsPositive()
    @IsOptional()
    price?: number;

    @IsInt()
    @IsPositive()
    @IsOptional()
    stock?: number;

    @IsString()
    @IsOptional()
    slug?: string;

    @IsString({ each: true })
    @IsArray()
    sizes: string[];

    @IsIn(['hombre', 'mujer', 'unisex', 'consumo'])
    gender: string;

    @IsString({ each: true })
    @IsArray()
    @IsOptional()
    tags: string[];

    //*Imágenes
    @IsArray()
    @IsOptional()
    images?: ProductImage[];

    @IsString()
    @MinLength(1)
    @IsOptional()
    status: string;

    @IsDate()
    @IsOptional()
    createDateAt: Date;

    @IsString()
    @IsOptional()
    createUserAt: string;

    @IsDate()
    @IsOptional()
    updateDateAt: Date;

    @IsString()
    @IsOptional()
    updateUserAt: string;

}
