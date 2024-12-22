import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../../infrastructure/adapters/product.repository';
import { Product } from '../../domain/models/product.entity';

@Injectable()
export class GetAllProductsUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(): Promise<Product[]> {
    return this.productRepository.findAll();
  }
}
