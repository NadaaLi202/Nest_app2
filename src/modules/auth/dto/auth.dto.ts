import { IsEmail, IsString, MaxLength, MinLength,IsNotEmpty } from "class-validator";



export class SignUpDTO{


    @MinLength(3)
    @MaxLength(10)
    @IsString()
    name:string;

    @IsEmail()
    email:string;

    @IsString()
    password: string;

}

export class signInDto{

    @MinLength(3)
    @IsString()	
    @IsEmail()
    email:string;

    @MinLength(3)
    @IsString()	
    @IsNotEmpty()
    password:string;
}