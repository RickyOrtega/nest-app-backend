import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../../infrastructure/adapters/product.repository';
import { CreateProductDto } from '../dto/create-product.dto';
import { Product } from '../../domain/models/product.entity';

@Injectable()
export class CreateProductUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(createProductDto: CreateProductDto): Promise<Product> {
    const product = new Product();
    product.name = createProductDto.name;
    product.description = createProductDto.description;
    product.price = createProductDto.price;
    product.stock = createProductDto.stock;

    return this.productRepository.save(product);
  }
}
