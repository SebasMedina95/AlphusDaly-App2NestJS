import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, 
         Repository } from 'typeorm';

import { initialDataPersons } from './data/persons.seed';
import { initialDataProducts } from './data/products.seed';
import { initialDataThematic } from './data/thematics.seed';
import { initialDataRooms } from './data/rooms.seed';

import { ImagesRoom } from '../../src/modules/rooms/entities/room-images.entity';
import { Product } from '../../src/modules/products/entities/product.entity';
import { ProductImage } from '../../src/modules/products/entities/product-image.entity';
import { Person } from '../../src/modules/persons/entities/person.entity';
import { Room } from '../../src/modules/rooms/entities/room.entity';
import { ThematicRoom } from '../../src/modules/rooms/entities/room-thematic.entity';

@Injectable()
export class SeedService {

  constructor(

    @InjectRepository(Product) private readonly productRepository: Repository<Product>,
    @InjectRepository(ProductImage) private readonly productImageRepository: Repository<ProductImage>,
    @InjectRepository(Person) private readonly personRepository: Repository<Person>,
    @InjectRepository(ThematicRoom) private readonly thematicRepository: Repository<ThematicRoom>,
    @InjectRepository(Room) private readonly roomRepository: Repository<Room>,
    @InjectRepository(ImagesRoom) private readonly roomImageRepository: Repository<ImagesRoom>,
    private readonly dataSource: DataSource,

  ){}
  
  async runSeed() {

    // await this.insertNewProducts();
    // await this.insertNewPersons();
    this.insertNewThematics();
    this.insertNewRooms();

    return 'SEED EXECUTE';

  }

  //? **********************************************
  //? ****** SEMILLA DE CREACIÓN DE PRODUCTOS ******
  //? **********************************************
  private async insertNewProducts() {

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

    } catch (error) {
      
      console.log(error);
      await queryRunner.rollbackTransaction();
      await queryRunner.release();

    }

  }

  //? *********************************************
  //? ****** SEMILLA DE CREACIÓN DE PERSONAS ******
  //? *********************************************
  private async insertNewPersons() {

    const personsSeed = initialDataPersons.persons;
    console.log(personsSeed);

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {

      personsSeed.forEach( async p => {

        const person = this.personRepository.create({ ...p });
        await this.personRepository.save( person );

      })

      await queryRunner.commitTransaction();
      await queryRunner.release();
      
    } catch (error) {

      console.log(error);
      await queryRunner.rollbackTransaction();
      await queryRunner.release();
      
    }

  }

  //? ************************************************************
  //? ****** SEMILLA DE CREACIÓN DE TEMÁTICAS DE HABITACIÓN ******
  //? ************************************************************
  private async insertNewThematics(){

    const thematicsSeed = initialDataThematic.thematics;
    console.log(thematicsSeed);

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {

      thematicsSeed.forEach( async t => {

        const thematic = this.thematicRepository.create({ ...t });
        await this.thematicRepository.save( thematic );

      })

      await queryRunner.commitTransaction();
      await queryRunner.release();
      
    } catch (error) {

      console.log(error);
      await queryRunner.rollbackTransaction();
      await queryRunner.release();
      
    }

  }

  //? ***********************************************
  //? ****** SEMILLA DE CREACIÓN DE HABITACIÓN ******
  //? ***********************************************
  private async insertNewRooms(){

    const roomsSeed = initialDataRooms.rooms;
    console.log(roomsSeed);

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {

      roomsSeed.forEach( async h => {
        
        const { images , ...details } = h

        const room = this.roomRepository.create({ ...details });
        await this.roomRepository.save( room );
        const idRoom = room.id;
        console.log({idRoom});

        images.forEach( async i  => {

          const image = this.roomImageRepository.create({ ...i, room: idRoom });
          await this.roomImageRepository.save( image );

        })
        
      })

      await queryRunner.commitTransaction();
      await queryRunner.release();

    } catch (error) {
      
      console.log(error);
      await queryRunner.rollbackTransaction();
      await queryRunner.release();

    }

  }
  
}
