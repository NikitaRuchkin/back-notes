import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose'

export type ProductDocument = Product & Document

export interface tableDataTypes {
   thing: string;
   bath: number;
   rub: number;
   cad: number;
   usa: number;
}


@Schema()
export class Product {
  @Prop({ required: true })
  tableData: Array<tableDataTypes>;
}

export const ProductSchema = SchemaFactory.createForClass(Product)