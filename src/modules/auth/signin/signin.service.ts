import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/core/schemas/user.schema';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { signInDto } from '../dto/auth.dto';

@Injectable()
export class SigninService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService
  ) {}

  signIn = async (tt: signInDto) => {
    const emailExist = await this.userModel.findOne({ email: tt.email });

    if (emailExist) {
      const match = await bcrypt.compare(tt.password, emailExist.password);
      if (match) {
        let token = this.jwtService.sign({ name: User.name }, { secret: 'test' });
        return { message: 'Login as success', token };
      } else {
        throw new HttpException('Password not match', HttpStatus.BAD_REQUEST);
      }
    } else {
      throw new HttpException('Email not found', HttpStatus.BAD_REQUEST);
    }
  };
}