import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { Person } from './entities/person.entity';
import { Repository, DataSource } from 'typeorm';
import { PaginationDto } from '../../common/dtos/pagination.dto';

@Injectable()
export class PersonsService {

  private readonly logger = new Logger('PersonsService')

  constructor(

    @InjectRepository(Person) private readonly personRepository: Repository<Person>,
    private readonly dataSource: DataSource,

  ){}

  async create(createPersonDto: CreatePersonDto) {
    
    const resPerson = this.personRepository.create({ ...createPersonDto });
    await this.personRepository.save(resPerson);
    return resPerson;
    
  }

  async findAll(paginationDto: PaginationDto) {
    
    const { limit = 5, offset = 1 } = paginationDto;

    const [items, totalCount] = await this.personRepository.findAndCount({
      
      take: limit,
      skip: limit * (offset - 1),

      order: {
        names : 'ASC'
      }
      
    });

    const totalPages: number = Math.ceil(totalCount / (limit));

    return {
      items,
      page: offset,
      perPage: limit,
      totalData: totalCount,
      totalPages : totalPages
    };
    
  }

  findOne(id: number) {
    return `This action returns a #${id} person`;
  }

  update(id: number, updatePersonDto: UpdatePersonDto) {
    return `This action updates a #${id} person`;
  }

  remove(id: number) {
    return `This action removes a #${id} person`;
  }
}
