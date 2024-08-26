import { signInDto } from '../dto/auth.dto';
import { SigninService } from './signin.service';
export declare class SigninController {
    private _signinService;
    constructor(_signinService: SigninService);
    signIn(body: signInDto): Promise<{
        message: string;
        token: string;
    }>;
}
