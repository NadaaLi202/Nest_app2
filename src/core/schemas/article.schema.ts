import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { maxLength, min, minLength } from "class-validator";
import mongoose from "mongoose";



@Schema({

    versionKey: false,
    timeseries:{

        timeField:'createdAt',
        metaField:'metadata',
        granularity:'days'
    }
})
export class Article {


    @Prop({required:true,minlength: 3, maxlength : 10, unique:true})
    title: string;

    @Prop({required:true})
    slug : string;

    @Prop({required:true,minLength:3, maxLength: 1000})
    description: string;

    @Prop({required:true,minLength:3, maxLength: 1000})
    content : string;


    
    image : string;

    @Prop({default:0})
    likes : number;
    // @Prop({type:mongoose.Schema.Types.ObjectId,ref:'Tags',default:[]})
    @Prop({default:[]})
    tags: string[];

    @Prop({unique:true})
    author: string;

    createdAt: Date;

    updatedAt : Date ;

}


export const ArticleShema = SchemaFactory.createForClass(Article);