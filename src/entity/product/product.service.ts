import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductDocument, Product } from './product.schema';

//logic for request
@Injectable()
export class ProductService {
  constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {
  }

  async getAll(): Promise<Product[]> {
    return this.productModel.find().exec()
  }

  async getById(id: string): Promise<Product> {
    return  this.productModel.findById(id)
  }

  async create(dto: Product | Product[]): Promise<Product | Product[]>
  {
    return this.productModel.create(dto)
  }

  async remove(id: string) {
    return this.productModel.findByIdAndRemove(id)
  }

  async update(id: string, dto: Product): Promise<Product> {
    return this.productModel.findByIdAndUpdate(id, dto, {new: true})
  }
}