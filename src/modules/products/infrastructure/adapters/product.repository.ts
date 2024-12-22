import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../../domain/models/product.entity';

@Injectable()
export class ProductRepository {

  constructor(
    @InjectRepository(Product)
    private readonly repository: Repository<Product>,
  ) {}

  save(product: Product): Product | PromiseLike<Product> {
    return this.repository.save(product);
}

  async findAll(): Promise<Product[]> {
    return this.repository.find();
  }

  async findById(id: string): Promise<Product | null> {
    return this.repository.findOneBy({ id });
  }

  async updateStock(id: string, stock: number): Promise<void> {
    await this.repository.update(id, { stock });
  }
}