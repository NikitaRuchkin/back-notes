import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TableDataModuleModule } from './tableData/tableData.module';

@Module({
  imports: [
    TableDataModuleModule,
    MongooseModule.forRoot('mongodb+srv://admin:12345677@nodelist.ixitwvh.mongodb.net/?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}