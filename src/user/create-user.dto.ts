import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty({message:'Name is required'})
    @MinLength(2)
    @MaxLength(50)
    name: string;

    @IsEmail({},{message:'Incorrect email format'})
    @IsNotEmpty({message:'Email is required'})
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8, {message:'Password must be at least 8 characters long'})
    @MaxLength(20)
    password: string;

    @IsPhoneNumber('DK')
    @IsNotEmpty()
    phoneNumber: string;
}