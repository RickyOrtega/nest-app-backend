import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule, // Importa el ConfigModule para usar ConfigService
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PASS'),
        database: configService.get<string>('DB_NAME'),
        entities: [__dirname + '/../../modules/**/domain/models/*.entity.{ts,js}'],
        synchronize: false,
        logging: true,
        ssl: { rejectUnauthorized: false },
      }),
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
