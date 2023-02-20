import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './entity/product/product.module';

@Module({
  imports: [
    ProductModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017', {dbName:"test2"})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

