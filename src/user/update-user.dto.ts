import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDto } from "./create-user.dto";

export class UpdateUserDto extends PartialType(CreateUserDto){}




// import { IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, IsString, MaxLength, MinLength } from 'class-validator';

// export class CreateUserDto {
//     @IsString()
//     @MinLength(2)
//     @MaxLength(50)
//     @IsOptional()
//     name?: string;

//     @IsEmail({},{message:'Incorrect email format'})
//     @IsOptional()
//     email?: string;

//     @IsString()
//     @MinLength(8, {message:'Password must be at least 8 characters long'})
//     @MaxLength(20)
//     @IsOptional()
//     password?: string;

//     @IsPhoneNumber('DK')
//     @IsOptional()
//     phoneNumber?: string;
// }