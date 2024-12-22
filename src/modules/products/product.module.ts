import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './domain/models/product.entity';
import { ProductRepository } from './infrastructure/adapters/product.repository';
import { ProductService } from './application/services/product.service';
import { ProductController } from './infrastructure/controllers/product.controller';
import { CreateProductUseCase } from './application/use-cases/create-product.use-case';
import { GetAllProductsUseCase } from './application/use-cases/get-all-products.use-case';
import { GetProductByIdUseCase } from './application/use-cases/get-product-by-id.use-case';
import { UpdateProductStockUseCase } from './application/use-cases/update-product-stock.use-case';

@Module({
    imports: [TypeOrmModule.forFeature([Product])],
    controllers: [ProductController],
    providers: [
        ProductRepository,
        ProductService,
        CreateProductUseCase,
        GetAllProductsUseCase,
        GetProductByIdUseCase,
        UpdateProductStockUseCase,
      ],
})
export class ProductModule { }