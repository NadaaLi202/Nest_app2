import { SignUpDTO } from '../dto/auth.dto';
import { User } from 'src/core/schemas/user.schema';
import { Model } from 'mongoose';
export declare class SignupService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    signUp(body: SignUpDTO): Promise<{
        message: string;
        newUser: import("mongoose").MergeType<import("mongoose").Document<unknown, {}, User> & User & {
            _id: import("mongoose").Types.ObjectId;
        }, Omit<SignUpDTO, "_id">>[];
    }>;
}
