import { ImagesRoom } from '../entities/room-images.entity';
import { 
    IsArray,
    IsDate,
    IsIn,
    IsInt,
    IsOptional,
    IsPositive,
    IsString,
    MaxLength,
    MinLength } from "class-validator";

export class CreateRoomDto {

    @IsString()
    @MinLength(3)
    @MaxLength(5)
    number: string;

    @IsString()
    @MinLength(1)
    position: string;

    @IsString()
    @MinLength(1)
    notes: string;

    @IsIn(['junior', 'middle', 'senior', 'baluk'])
    category: string;

    @IsString()
    @MinLength(1)
    @IsOptional()
    status: string;

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

    //--

    @IsArray()
    @IsOptional()
    images: ImagesRoom[]

    @IsInt()
    @IsPositive()
    theme: number;

}

