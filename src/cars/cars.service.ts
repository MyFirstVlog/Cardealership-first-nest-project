import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import {v4 as uuid} from 'uuid'
import { CreateCarDto, UpdateCarDto } from './dtos';

@Injectable()
export class CarsService {

    private cars: Car[] = [
        // {
        //     id: uuid(),
        //     brand: 'Toyota',
        //     model: 'Corrolla'
        // },
        // {
        //     id: uuid(),
        //     brand: 'Chevrolet',
        //     model: 'Camaro'
        // },
        // {
        //     id: uuid(),
        //     brand: 'Mazda',
        //     model: '2G'
        // },
    ];

    findAll(){
        return this.cars;
    }

    findOneById(id: string){
        const car = this.cars.find(car => car.id === id);

        if(!car)
            throw new NotFoundException(`Car with id '${id}' not found`);

        
        return car;

    }

    createCar(createCarDto: CreateCarDto){
        const car: Car = {
            ...createCarDto,
            id: uuid(),
        };

        this.cars = [
            ...this.cars,
            car,
        ];

        return {
            car
        }

    }

    updateCar(id: string, updateCarDto:UpdateCarDto){

        let carDB= this.findOneById(id);

        //* Si pasa esta linea es porque si encontro algo, si no arroja la excepcion
        console.log('eyyyy')
        if(updateCarDto.id && id !== updateCarDto.id)
            throw new BadRequestException('El id ingresado no se encuentra en nuestro sistema');
        console.log('eyyyy222')
        this.cars = this.cars.map( car => {

            if(car.id === id){  
                carDB = {
                    ...car,
                    ...updateCarDto,
                    id, //Para evitar sobreescribir
                }
                return carDB;
            }

            return car;
        });

        return carDB;

    }

    deleteCar(id: string){

        this.findOneById(id);

        //?Si pasa aqui es porque existe el registro;
        this.cars = this.cars.filter(car => car.id !== id);

        return this.cars;
    }

    fillCarsWithSeedData(cars: Car[]){
        this.cars = cars;
    }

}
