"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const signin_controller_1 = require("./signin/signin.controller");
const signup_controller_1 = require("./signup/signup.controller");
const signin_service_1 = require("./signin/signin.service");
const signup_service_1 = require("./signup/signup.service");
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("../../core/schemas/user.schema");
const jwt_1 = require("@nestjs/jwt");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: user_schema_1.User.name, schema: user_schema_1.UserSchema }])],
        controllers: [signin_controller_1.SigninController, signup_controller_1.SignupController],
        providers: [signin_service_1.SigninService, signup_service_1.SignupService, jwt_1.JwtService],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map