import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
    DataSource,
    Repository
} from 'typeorm';
import { Person } from '../../../src/modules/persons/entities/person.entity';
import { initialDataPersons } from '../data/persons.seed';


@Injectable()
export class PersonSeedService {

    constructor(

        @InjectRepository(Person) private readonly personRepository: Repository<Person>,
        private readonly dataSource: DataSource,

    ) { }

    async insertNewPersons() {

        const personsSeed = initialDataPersons.persons;
        console.log(personsSeed);

        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();

        try {

            personsSeed.forEach(async p => {

                const person = this.personRepository.create({ ...p });
                await this.personRepository.save(person);

            })

            await queryRunner.commitTransaction();
            await queryRunner.release();

            return "SEED DE PERSONAS EJECUTADO CON ÉXITO!";

        } catch (error) {

            console.log(error);
            await queryRunner.rollbackTransaction();
            await queryRunner.release();

        }

    }

}