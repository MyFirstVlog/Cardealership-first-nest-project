import { Controller, Get, Param, ParseIntPipe, Post, Body, Patch, Delete} from '@nestjs/common';
import { CarsService } from './cars.service';

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
    getCarById(@Param('id', ParseIntPipe) id: number){
        return this.carsService.findOneById(id);
    }

    @Post()
    addNewCar(@Body() body: any){
        return {
            body
        }
    }

    @Patch(':id')
    updateCar(
        @Param('id', ParseIntPipe) id: number, 
        @Body() body: any
    ){
        return {
            id,
            body
        }
    }

    @Delete(':id')
    deleteCarById(@Param('id', ParseIntPipe) id: number){
        return{
            id
        }
    }
    


}
