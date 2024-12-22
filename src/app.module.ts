import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './common/database/database.module';
import { ProductModule } from './modules/products/product.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Configuración global para las variables de entorno
    }),
    DatabaseModule, // Delegamos la lógica de la base de datos a DatabaseModule
    ProductModule, // Productos
  ],
})
export class AppModule {}
