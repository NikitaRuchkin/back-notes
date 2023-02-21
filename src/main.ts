import { HttpException, HttpStatus, ValidationError, ValidationPipe } from "@nestjs/common";
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const bootstrap = async () =>
{
  try
  {
    const PORT = process.env.PORT || 5000
    const app = await NestFactory.create(AppModule)
    app.enableCors()

    app.useGlobalPipes(new ValidationPipe({
      transformOptions: {
        enableImplicitConversion: true, // allow conversion underneath
      },}))

    await app.listen(PORT, () => console.log(`server started on ${PORT}`))
  }
  catch (e)
  {
    throw e
  }
}
bootstrap()
