import { ImagesRoom } from '../entities/room-images.entity';
import { 
    IsArray,
    IsDate,
    IsNumber,
    IsOptional,
    IsPositive,
    IsString,
    MaxLength,
    MinLength } from "class-validator";

export class CreateThematicDto {

    @IsString()
    @MinLength(1)
    @MaxLength(150)
    thematic: string;

    @IsString()
    @MinLength(1)
    @MaxLength(500)
    description: string;

    @IsString({ each: true })
    @IsArray()
    comforts: string[];

    @IsNumber()
    @IsPositive()
    @IsOptional()
    price: number;

    @IsString()
    @MinLength(1)
    @IsOptional()
    status: string;

    @IsString()
    @IsOptional()
    referencialImage: string;

    @IsString()
    @MinLength(1)
    @IsOptional()
    createUserAt: string;

    @IsDate()
    @IsOptional()
    createDateAt: Date;

    @IsString()
    @MinLength(1)
    @IsOptional()
    updateUserAt: string;

    @IsDate()
    @IsOptional()
    updateDateAt: Date;

}

