import {
    BadRequestException,
    Injectable,
    InternalServerErrorException,
    Logger
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import {
    DataSource,
    Repository
} from 'typeorm';

import { CreateThematicDto } from '../dto/create-thematic.dto';
import { UpdateThematicDto } from '../dto/update-thematic.dto';

import { ThematicRoom } from '../entities/room-thematic.entity';
import { PaginationDto } from '../../../common/dtos/pagination.dto';

@Injectable()
export class ThematicsService {

    private readonly logger = new Logger('ThematicsService')

    constructor(

        @InjectRepository(ThematicRoom) private readonly thematicRepository: Repository<ThematicRoom>,
        private readonly dataSource: DataSource,

    ) { }

    async create(createThematicDto: CreateThematicDto) {
        
        const resThematic = this.thematicRepository.create({ ...createThematicDto });
        await this.thematicRepository.save(resThematic);
        return resThematic;
        
    }

    async findAll(paginationDto: PaginationDto) {
        
        const { limit = 5, offset = 1 } = paginationDto;

        const [items, totalCount] = await this.thematicRepository.findAndCount({
        
        take: limit,
        skip: limit * (offset - 1),

        order: {
            thematic : 'ASC'
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
        return `This action returns a #${id} thematic`;
    }

    // TODO: REVISAR COMO HACERLO CON REPOSITORY.MERGE(ENTIDAD ENCONTRADA CON FIND, BODYACTUALIZADO)
    update(id: number, updateThematicDto: UpdateThematicDto) {
        return `This action updates a #${id} thematic`;
    }

    remove(id: number) {
        return `This action removes a #${id} thematic`;
    }



    //* ERROR GENÉRICO !
    private handleDbExceptions(error: any) {

        if (error.code === '23505') throw new BadRequestException(error.detail);

        this.logger.error(error);
        throw new InternalServerErrorException('Error no controlado, por favor consulte el LOG para obtener más información.');

    }

}
