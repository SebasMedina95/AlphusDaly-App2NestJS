import { 
    IsArray,
    IsDate,
    IsEmail,
    IsIn,
    IsInt,
    IsOptional,
    IsPositive,
    IsString,
    MaxLength,
    MinLength } from "class-validator";
    
export class CreatePersonDto {

    @IsString()
    @MinLength(1)
    @MaxLength(30)
    documentType: string;

    @IsString()
    @MinLength(1)
    @MaxLength(50)
    document: string;

    @IsString()
    @MinLength(3)
    @MaxLength(100)
    names: string;

    @IsString()
    @MinLength(3)
    @MaxLength(100)
    lastnames: string;

    @IsIn(['M', 'F', 'NA'])
    gender: string;

    @IsString()
    @MinLength(1)
    @MaxLength(150)
    @IsOptional()
    address: string;

    @IsString()
    @MinLength(1)
    @MaxLength(60)
    @IsOptional()
    phone: string;

    @IsEmail()
    @MaxLength(150)
    email: string;

    @IsDate()
    @IsOptional()
    birthDate: Date;

    @IsString()
    @MinLength(1)
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


}
