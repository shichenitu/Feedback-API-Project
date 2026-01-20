import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID, Max, MaxLength, maxLength, min, Min, MinLength } from 'class-validator';

export class CreateFeedbackDto{
    @IsUUID()
    @IsNotEmpty()
    productId: string;

    @IsString()
    @IsOptional()
    @MaxLength(500, {message: 'Comment is too long (max 500 characters)'})
    comment: string;

    @IsInt()
    @IsNotEmpty()
    @Min(1)
    @Max(5)
    valueRating: number;

    @IsInt()
    @IsNotEmpty()
    @Min(1)
    @Max(5)
    practicalityRating: number;

    @IsInt()
    @IsNotEmpty()
    @Min(1)
    @Max(5)
    safetyRating: number;

    @IsInt()
    @IsNotEmpty()
    @Min(1)
    @Max(5)
    easeOfUseRating: number;

    @IsInt()
    @IsNotEmpty()
    @Min(1)
    @Max(5)
    accuracyRating: number;

    @IsInt()
    @IsNotEmpty()
    @Min(1)
    @Max(5)
    aestheticsRating: number;

    @IsInt()
    @IsNotEmpty()
    @Min(1)
    @Max(5)
    durabilityRating: number;
    
    @IsInt()
    @IsNotEmpty()
    @Min(1)
    @Max(5)
    sustainabilityRating: number;
}