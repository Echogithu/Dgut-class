import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('莞工课堂-后台管理API')
    .setDescription('莞工课堂-后台管理调用API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(5000);
  // tslint:disable-next-line:no-console
  console.log('http://localhost:5000/api-docs');
}
bootstrap();
