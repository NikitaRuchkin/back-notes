import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.schema';
import {
  ProductCreateDto,
  ProductCreateScoreDto,
} from './validators/product-create.dto';
import { getValutes } from './assets/getValute';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('list')
  async list(): Promise<Product[]> {
    return await this.productService.getAll();
  }

  @Get('get')
  async get(@Body('id') id: string): Promise<Product> {
    return await this.productService.getById(id);
  }

  @Post('create')
  async create(@Body() dto: Product | Product[]): Promise<Product | Product[]> {
    let valutes = await  getValutes().then((data) => data);
    console.log(valutes); //got actual valutes
    return await this.productService.create(dto);
  }

  @Post('update')
  async update(@Body() dto: Product, @Body('id') id: string): Promise<Product> {
    return await this.productService.update(id, dto);
  }

  @Post('remove')
  async remove(@Body('id') id: string): Promise<Product> {
    return this.productService.remove(id);
  }
}
