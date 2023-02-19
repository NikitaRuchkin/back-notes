import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Redirect, Header, Req, Res } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { updateProductDto } from './dto/update-product.dto';
import {Request, Response} from 'express'
import { ProductService } from './tableData.service';
import { Product } from './schemas/tableData.schema';

@Controller('tableData')
export class TableDataController {
  constructor(private readonly productService: ProductService) {

  }
  // @Get()
  // // @Redirect('https://google.com', 301)
  // getall(@Req() req, @Res() res ): string {
  //     res.status(201).end('Poke')
  //     return 'getAll'
  // }

  @Get() //decorator
  gerAll(): Promise<Product[]> {
    return this.productService.getAll()
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Product>  {
    return this.productService.getById(id)
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productService.create(createProductDto)
  }

  @Delete(':id')
  remove(@Param('id') id:string): Promise<Product> {
    return this.productService.remove(id)
  }

  @Put(':id')
  update(@Body() updateProductDto: updateProductDto, @Param('id') id:string): Promise<Product> {
    return this.productService.update(id, updateProductDto)
  }
}