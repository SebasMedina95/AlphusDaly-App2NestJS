import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Product } from './entities/product.entity';
import { ProductImage } from './entities/product-image.entity';

import { ProductsService } from './services/products.service';
import { CloudinaryService } from '../../common/cloudinary/cloudinary.service';

import { ProductsController } from './controllers/products.controller';

@Module({
  controllers: [
    ProductsController
  ],
  providers: [
    ProductsService,
    CloudinaryService
  ],
  imports: [
    TypeOrmModule.forFeature([
      Product,
      ProductImage,
    ])
  ],
  exports: [
    ProductsService,
    TypeOrmModule
  ]
})
export class ProductsModule {}
