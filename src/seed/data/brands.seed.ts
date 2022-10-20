import { v4 as uuid } from 'uuid';
import { Brand } from '../../brands/entities/brand.entity';

export const BRANDS_SEED: Brand[] = [
    {
        id: uuid(),
        name: 'Volvo',
        createdAt: Date.now(),
    },
    {
        id: uuid(),
        name: 'Mustang',
        createdAt: Date.now(),
    },
    {
        id: uuid(),
        name: 'Audi',
        createdAt: Date.now(),
    },
]