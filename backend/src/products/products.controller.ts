import { Controller, Get, Post, Body, Patch, Param, Delete, Version } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @Version('1')
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  @Version('1')
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':productId')
  @Version('1')
  findOne(@Param('productId') id: string) {
    return this.productsService.findOne(+id);
  }

  @Patch(':productId')
  @Version('1')
  update(@Param('productId') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':productId')
  @Version('1')
  remove(@Param('productId') id: string) {
    return this.productsService.remove(+id);
  }
}
