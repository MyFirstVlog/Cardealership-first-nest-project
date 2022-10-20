import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {

  private brands: Brand[] = [
    // {
    //   id: uuid(),
    //   name: 'Toyota',
    //   createdAt: Date.now(),
    // }
]

  create(createBrandDto: CreateBrandDto) {
    const {name } = createBrandDto;
    const brand: Brand = {
      id: uuid(),
      name: name.toLowerCase(), 
      createdAt: Date.now(),
    }

    this.brands = [
      ...this.brands,
      brand,
    ]
    return this.brands;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find(brand => brand.id === id);

    if(!brand) throw new NotFoundException(`Brand with id: ${id} was not found on DB, please check again the id`);

    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    this.findOne(id);

    this.brands = this.brands.map( brand =>  {
      if(brand.id === id){
        brand.updatedAt = Date.now();
        return{
          ...brand,
          ...updateBrandDto,
        }
      }
      return brand;
    })

    return this.brands;
  }

  remove(id: string) {
    this.brands = this.brands.filter( brand => brand.id !== id);
    return this.brands;
  }

  fillBrandsWithSeedData(brands: Brand[]){
        this.brands = brands;
    }
}
