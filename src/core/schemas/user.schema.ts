import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { TimeSeriesCollectionOptions } from "mongoose-timeseries";


@Schema({
    timeseries: {
      timeField: 'createdAt',
      metaField: 'metadata',
      granularity: 'days'
    },
    versionKey: false
  })
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);