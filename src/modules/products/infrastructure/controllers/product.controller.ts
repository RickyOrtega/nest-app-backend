import { Controller, Get, Patch, Param, Body, Post } from '@nestjs/common';
import { ProductService } from '../../application/services/product.service';
import { CreateProductDto } from '../../application/dto/create-product.dto';

@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @Post()
    async createProduct(@Body() createProductDto: CreateProductDto) {
        return this.productService.createProduct(createProductDto);
    }

    @Get()
    async getAllProducts() {
        return this.productService.getAllProducts();
    }

    @Get(':id')
    async getProductById(@Param('id') id: string) {
        return this.productService.getProductById(id);
    }

    @Patch(':id')
    async updateProductStock(
        @Param('id') id: string,
        @Body('stock') newStock: number,
    ){
        await this.productService.updateProductStock(id, newStock);
        return { message: `Stock del producto con ID ${id} actualizado correctamente.` };
    }
}