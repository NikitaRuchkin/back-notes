import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductService } from './tableData.service';
import { TableDataController } from './tableData.controller';
import { Product, ProductSchema } from './schemas/tableData.schema';

@Module({
  providers: [ProductService],
  controllers: [TableDataController],
  imports: [
    MongooseModule.forFeature([
      {name: Product.name, schema: ProductSchema}
    ])
  ]
})
export class ProductsModule {}