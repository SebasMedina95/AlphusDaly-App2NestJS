import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
    DataSource,
    Repository
} from 'typeorm';
import { Product } from '../../../src/modules/products/entities/product.entity';
import { ProductImage } from '../../../src/modules/products/entities/product-image.entity';
import { initialDataProducts } from '../data/products.seed';


@Injectable()
export class ProductSeedService {

    constructor(

        @InjectRepository(Product) private readonly productRepository: Repository<Product>,
        @InjectRepository(ProductImage) private readonly productImageRepository: Repository<ProductImage>,
        private readonly dataSource: DataSource,

    ) { }

    //? **********************************************
    //? ****** SEMILLA DE CREACIÓN DE PRODUCTOS ******
    //? **********************************************
    async insertNewProducts() {

        const productsSeed = initialDataProducts.products;
        console.log(productsSeed);

        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();

        try {

        productsSeed.forEach( async p => {
            
            const { images , ...details } = p

            const product = this.productRepository.create({ ...details });
            await this.productRepository.save( product );
            const idProduct = product.id;

            images.forEach( async i  => {

            const image = this.productImageRepository.create({ ...i, product: idProduct });
            await this.productImageRepository.save( image );

            })
            
        })

        await queryRunner.commitTransaction();
        await queryRunner.release();

        return "SEED DE PRODUCTOS EJECUTADO CON ÉXITO!";

        } catch (error) {
        
        console.log(error);
        await queryRunner.rollbackTransaction();
        await queryRunner.release();

        }

    }

}