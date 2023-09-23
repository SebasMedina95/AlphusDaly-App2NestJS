import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
    DataSource,
    Repository
} from 'typeorm';
import { ThematicRoom } from '../../../src/modules/rooms/entities/room-thematic.entity';
import { initialDataThematic } from '../data/thematics.seed';


@Injectable()
export class ThematicSeedService {

    constructor(

        @InjectRepository(ThematicRoom) private readonly thematicRepository: Repository<ThematicRoom>,
        private readonly dataSource: DataSource,

    ) { }

    //? ************************************************************
    //? ****** SEMILLA DE CREACIÓN DE TEMÁTICAS DE HABITACIÓN ******
    //? ************************************************************
    async insertNewThematics() {

        const thematicsSeed = initialDataThematic.thematics;
        // console.log(thematicsSeed);

        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();

        try {

            thematicsSeed.forEach(async t => {

                const thematic = this.thematicRepository.create({ ...t });
                await this.thematicRepository.save(thematic);

            })

            await queryRunner.commitTransaction();
            await queryRunner.release();

            return "SEED DE TEMÁTICAS EJECUTADO CON ÉXITO!";

        } catch (error) {

            console.log(error);
            await queryRunner.rollbackTransaction();
            await queryRunner.release();

        }

    }

}