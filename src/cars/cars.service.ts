import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {

    private cars = [
        {
            id: 0,
            brand: 'Toyota',
            model: 'Corrolla'
        },
        {
            id: 1,
            brand: 'Chevrolet',
            model: 'Camaro'
        },
        {
            id: 2,
            brand: 'Mazda',
            model: '2G'
        },
    ];

    findAll(){
        return this.cars;
    }

    findOneById(id: number){
        const car = this.cars.find(car => car.id === id);

        if(!car)
            throw new NotFoundException(`Car with id '${id}' not found`);

        
        return {
            car
        };
    }

}
