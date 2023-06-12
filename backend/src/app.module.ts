import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/data-source';

const dbModule = TypeOrmModule.forRoot(dataSourceOptions);


@Module({
  imports: [dbModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
