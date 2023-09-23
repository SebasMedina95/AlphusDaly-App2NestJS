import { BadRequestException,
         Injectable,
         InternalServerErrorException,
         Logger } from '@nestjs/common';
         
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource,
         Repository } from 'typeorm';

import { CreateRoomDto } from '../dto/create-room.dto';
import { UpdateRoomDto } from '../dto/update-room.dto';

import { Room } from '../entities/room.entity';
import { ImagesRoom } from '../entities/room-images.entity';
import { PaginationDto } from '../../../common/dtos/pagination.dto';
import { uploadRoomtFile } from '../interfaces/uploadRoomtFile.interface';

@Injectable()
export class RoomsService {

  private readonly logger = new Logger('RoomsService')

  constructor(

    @InjectRepository(Room) private readonly roomRepository: Repository<Room>,
    @InjectRepository(ImagesRoom) private readonly roomImageRepository: Repository<ImagesRoom>,
    private readonly dataSource: DataSource,

  ){}

  async create(createRoomDto: CreateRoomDto) {

    const { images , ...roomDetails} = createRoomDto;

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {

      const room = this.roomRepository.create({ ...roomDetails });
      await this.roomRepository.save( room );
      const idRoom = room.id;

      if(images){

        images.map( async(i) => {

          const resImage = this.roomImageRepository.create({
            url : i.url,
            notes : i.notes,
            createUserAt : i.createUserAt,
            createDateAt : i.createDateAt,
            room : idRoom
          })

          await queryRunner.manager.save( resImage );

        })

        await queryRunner.commitTransaction();
        await queryRunner.release();

        return await this.roomRepository.find({
          where: { id : idRoom },
          relations: {
            images : true,
            theme : true
          }
        })

      }
      
    } catch (error) {
      
      await queryRunner.rollbackTransaction();
      await queryRunner.release();
      this.handleDbExceptions(error);

    }
    
  }

  async findAll( paginationDto: PaginationDto ) {
    
    const { limit = 10, offset = 1 } = paginationDto;

    const [items, totalCount] = await this.roomRepository.findAndCount({
      take: limit,
      skip: limit * (offset - 1),
      //Relaciones
      order: {
        number : 'ASC'
      },
      relations: {
        theme : true,
        images : true
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
    return `This action returns a #${id} room`;
  }

  // TODO: REVISAR COMO HACERLO CON REPOSITORY.MERGE(ENTIDAD ENCONTRADA CON FIND, BODYACTUALIZADO)
  update(id: number, updateRoomDto: UpdateRoomDto) {
    return `This action updates a #${id} room`;
  }

  remove(id: number) {
    return `This action removes a #${id} room`;
  }

  async createRoomImage(roomImage: uploadRoomtFile){

    // console.log(roomImage);
    const image = this.roomImageRepository.create({
      url: roomImage.url,
      createUserAt: roomImage.createUserAt,
      createDateAt: roomImage.createDateAt,
      room: roomImage.room,
      notes: roomImage.notes
    });

    await this.roomImageRepository.save( image );
    return roomImage;

  }

  //* ERROR GENÉRICO !
  private handleDbExceptions( error: any ) {

    if( error.code === '23505' ) throw new BadRequestException(error.detail);

    this.logger.error(error);
    throw new InternalServerErrorException('Error no controlado, por favor consulte el LOG para obtener más información.');

  }

}
