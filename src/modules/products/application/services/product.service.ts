import { Injectable } from '@nestjs/common';
import { CreateProductDto } from '../dto/create-product.dto';
import { CreateProductUseCase } from '../use-cases/create-product.use-case';
import { GetAllProductsUseCase } from '../use-cases/get-all-products.use-case';
import { GetProductByIdUseCase } from '../use-cases/get-product-by-id.use-case';
import { UpdateProductStockUseCase } from '../use-cases/update-product-stock.use-case';
import { Product } from '../../domain/models/product.entity';

@Injectable()
export class ProductService {
  constructor(
    private readonly createProductUseCase: CreateProductUseCase,
    private readonly getAllProductsUseCase: GetAllProductsUseCase,
    private readonly getProductByIdUseCase: GetProductByIdUseCase,
    private readonly updateProductStockUseCase: UpdateProductStockUseCase,
  ) {}

  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    return this.createProductUseCase.execute(createProductDto);
  }

  async getAllProducts(): Promise<Product[]> {
    return this.getAllProductsUseCase.execute();
  }

  async getProductById(id: string): Promise<Product> {
    return this.getProductByIdUseCase.execute(id);
  }

  async updateProductStock(id: string, newStock: number): Promise<void> {
    await this.updateProductStockUseCase.execute(id, newStock);
  }
}
