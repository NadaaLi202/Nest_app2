import { JwtService } from '@nestjs/jwt';
import { User } from 'src/core/schemas/user.schema';
import { Model } from 'mongoose';
import { signInDto } from '../dto/auth.dto';
export declare class SigninService {
    private userModel;
    private jwtService;
    constructor(userModel: Model<User>, jwtService: JwtService);
    signIn: (tt: signInDto) => Promise<{
        message: string;
        token: string;
    }>;
}
