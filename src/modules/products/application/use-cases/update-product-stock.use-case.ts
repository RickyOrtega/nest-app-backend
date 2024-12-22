import { Injectable } from '@nestjs/common';
import { GetProductByIdUseCase } from './get-product-by-id.use-case';
import { ProductRepository } from '../../infrastructure/adapters/product.repository';

@Injectable()
export class UpdateProductStockUseCase {
  constructor(
    private readonly getProductByIdUseCase: GetProductByIdUseCase,
    private readonly productRepository: ProductRepository,
  ) {}

  async execute(id: string, newStock: number): Promise<void> {
    const product = await this.getProductByIdUseCase.execute(id);
    if (newStock < 0) {
      throw new Error('El stock no puede ser negativo.');
    }
    await this.productRepository.updateStock(product.id, newStock);
  }
}
