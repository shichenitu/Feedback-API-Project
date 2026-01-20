import { IsNotEmpty, IsNumber, IsString, IsUrl, Length, Min } from 'class-validator';

export class CreateProductDto {
    @IsString()
    @IsNotEmpty({message: 'SKU is required'})
    @Length(5, 20, {message: 'SKU must be between 5 and 20 characters'})
    stockKeepingUnit: string;

    @IsString()
    @IsNotEmpty()  
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsString()
    @IsNotEmpty()
    category: string;

    @IsNumber()
    @IsNotEmpty()
    @Min(0, {message: 'Price must be a positive number'})
    price: number;
    
    @IsUrl({}, {message: 'Please provide a valid image URL'})
    @IsNotEmpty()
    imageUrl: string;
}