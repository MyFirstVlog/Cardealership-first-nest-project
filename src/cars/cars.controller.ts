import { Controller, Get, Param, ParseIntPipe, Post, Body, Patch, Delete, ParseUUIDPipe, UsePipes, ValidationPipe} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dtos/create-car.dto';
import { UpdateCarDto } from './dtos/update-car.dto';

@Controller('cars')
export class CarsController {

    //* Método get

    constructor( //?Inyección de depdencias
        private readonly carsService : CarsService 
    ){}

    @Get()
    getAllCars(){
        return this.carsService.findAll();
    }

    @Get(':id')
    getCarById(@Param('id', new ParseUUIDPipe({version: '4' })) id: string){
        return this.carsService.findOneById(id);
    }
 
    @Post()
    addNewCar(@Body() createCarDto: CreateCarDto){
        return this.carsService.createCar(createCarDto);
    }

    @Patch(':id')
    updateCar(
        @Param('id', new ParseUUIDPipe({version: '4'})) id: string, 
        @Body() updateCarDto: UpdateCarDto
    ){
        return this.carsService.updateCar(id, updateCarDto);
    }

    @Delete(':id')
    deleteCarById(@Param('id', ParseUUIDPipe) id: string){
        
        return this.carsService.deleteCar(id);
        
    }
    


}
