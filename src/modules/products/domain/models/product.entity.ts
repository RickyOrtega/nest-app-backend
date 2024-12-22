// src/modules/products/domain/entities/product.entity.ts
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  // Aquí asumí el precision en 15 ya que en Colombia se llega a manejar productos de hasta millones
  @Column('decimal', { precision: 15, scale: 2 })
  price: number;

  @Column()
  description: string;

  @Column('int')
  stock: number;
}
