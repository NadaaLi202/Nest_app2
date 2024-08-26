import { SignupService } from './signup.service';
import { SignUpDTO } from '../dto/auth.dto';
export declare class SignupController {
    private _signupService;
    constructor(_signupService: SignupService);
    signUp(body: SignUpDTO): Promise<{
        message: string;
        newUser: import("mongoose").MergeType<import("mongoose").Document<unknown, {}, import("../../../core/schemas/user.schema").User> & import("../../../core/schemas/user.schema").User & {
            _id: import("mongoose").Types.ObjectId;
        }, Omit<SignUpDTO, "_id">>[];
    }>;
}
