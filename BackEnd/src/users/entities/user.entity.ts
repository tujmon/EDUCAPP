import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ReportUserSchema, ReportUser } from './reportUser.entity';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  email: string;

  @Prop()
  name: string;

  @Prop()
  password: string;

  @Prop({ required: true, default: false })
  isInstructor: boolean;

  @Prop({ type: ReportUserSchema })
  report: ReportUser;
}

User;

export const UserSchema = SchemaFactory.createForClass(User);
