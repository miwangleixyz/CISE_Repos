import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BookModule } from './api/books/book.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(), // 加载 .env 文件
    MongooseModule.forRoot(process.env.DB_URI as string), // 从环境变量里取
    BookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}