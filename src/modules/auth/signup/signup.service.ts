import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { SignUpDTO } from '../dto/auth.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/core/schemas/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';



@Injectable()
export class SignupService {

    constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {


    }

  async  signUp(body:SignUpDTO ){

    const email = body.email
    const isEmailExist = await this.userModel .findOne({email:email})

    if(isEmailExist)   throw new HttpException('Email already exist', HttpStatus.CONFLICT);
        
    body.password = await bcrypt.hash(body.password, 8);
      

      const newUser = await this .userModel.insertMany(body)

    //   console.log(body);

      return {message : "User created successfully",newUser}
    }

}
