import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose'

export type ProductDocument = Product & Document

@Schema()
export class Product {
  @Prop({ required: true })
  thing: string

  @Prop({ required: true })
  bath: number;

  @Prop({ required: true })
  rub: number;

  @Prop({ required: true })
  cad: number;

  @Prop({ required: true })
  usa: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product)