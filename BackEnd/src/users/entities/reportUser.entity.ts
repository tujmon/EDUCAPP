import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';

export type ReportUserDocument = ReportUser & Document;

@Schema()
export class ReportUser {
  @Prop()
  cursos: string;

  @Prop()
  idade: number;

  @Prop()
  avaliacao: number;

  @Prop()
  residencia: string;

  @Prop()
  descricao: string;

  @Prop()
  formacoes: [string];

  @Prop()
  descricaoAulas: [string];

  @Prop()
  horarios: [string];

  @Prop()
  interesses: [string];

  @Prop()
  historico: [string];
}

ReportUser;

export const ReportUserSchema = SchemaFactory.createForClass(ReportUser);
