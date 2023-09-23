import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Room } from '../../../src/modules/rooms/entities/room.entity';
import { ImagesRoom } from '../../../src/modules/rooms/entities/room-images.entity';
import { initialDataRooms } from '../data/rooms.seed';
import {
    DataSource,
    Repository
} from 'typeorm';


@Injectable()
export class RoomSeedService {

    constructor(

        @InjectRepository(Room) private readonly roomRepository: Repository<Room>,
        @InjectRepository(ImagesRoom) private readonly roomImageRepository: Repository<ImagesRoom>,
        private readonly dataSource: DataSource,

    ) { }

    //? ***********************************************
    //? ****** SEMILLA DE CREACIÓN DE HABITACIÓN ******
    //? ***********************************************
    async insertNewRooms() {

        const roomsSeed = initialDataRooms.rooms;
        // console.log(roomsSeed);

        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();

        try {

            roomsSeed.forEach(async h => {

                const { images, ...details } = h

                const room = this.roomRepository.create({ ...details });
                await this.roomRepository.save(room);
                const idRoom = room.id;
                // console.log({ idRoom });

                images.forEach(async i => {

                    const image = this.roomImageRepository.create({ ...i, room: idRoom });
                    await this.roomImageRepository.save(image);

                })

            })

            await queryRunner.commitTransaction();
            await queryRunner.release();

            return "SEED DE HABITACIONES EJECUTADAS CON ÉXITO!";

        } catch (error) {

            console.log(error);
            await queryRunner.rollbackTransaction();
            await queryRunner.release();

        }

    }

}