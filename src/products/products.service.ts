import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';


@Injectable()
export class ProductsService {
  // Dependency Injection
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ){}

  // "Creat" Logic
  async create(createProductDto: CreateProductDto) {
    const newProduct = this.productRepository.create(createProductDto);
    return await this.productRepository.save(newProduct);
  }

  // "Find All" Logic
  async findAll() {
    return await this.productRepository.find();
  }

  // "Find One" Logic
  async findOne(id: string) {
    return await this.productRepository.findOneBy({id});
  }

  // "Update" Logic
  async update(id: string, updateProductDto: UpdateProductDto) {
    await this.productRepository.update(id, updateProductDto);
    return await this.productRepository.findOneBy({id});
  }

  // "Remove" Logic
  async remove(id: string) {
    return await this.productRepository.delete(id);
  }
}
