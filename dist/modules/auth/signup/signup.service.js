"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignupService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("../../../core/schemas/user.schema");
const mongoose_2 = require("mongoose");
const bcrypt = require("bcrypt");
let SignupService = class SignupService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async signUp(body) {
        const email = body.email;
        const isEmailExist = await this.userModel.findOne({ email: email });
        if (isEmailExist)
            throw new common_1.HttpException('Email already exist', common_1.HttpStatus.CONFLICT);
        body.password = await bcrypt.hash(body.password, 8);
        const newUser = await this.userModel.insertMany(body);
        return { message: "User created successfully", newUser };
    }
};
exports.SignupService = SignupService;
exports.SignupService = SignupService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], SignupService);
//# sourceMappingURL=signup.service.js.map