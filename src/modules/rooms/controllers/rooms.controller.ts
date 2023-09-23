import { Controller,
         Get,
         Post,
         Body,
         Patch,
         Param,
         Delete, 
         Query,
         UseInterceptors,
         UploadedFile,
         ParseFilePipe,
         MaxFileSizeValidator,
         FileTypeValidator} from '@nestjs/common';
import { RoomsService } from '../services/rooms.service';
import { CreateRoomDto } from '../dto/create-room.dto';
import { UpdateRoomDto } from '../dto/update-room.dto';
import { PaginationDto } from '../../../common/dtos/pagination.dto';
import { CloudinaryService } from '../../../common/cloudinary/cloudinary.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { uploadRoomtFile } from '../interfaces/uploadRoomtFile.interface';

@Controller('rooms')
export class RoomsController {
  constructor(
    private readonly roomsService: RoomsService,
    private readonly cloudinaryService: CloudinaryService
  ) {}

  @Post()
  create(@Body() createRoomDto: CreateRoomDto) {
    return this.roomsService.create(createRoomDto);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.roomsService.findAll(paginationDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roomsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoomDto: UpdateRoomDto) {
    return this.roomsService.update(+id, updateRoomDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roomsService.remove(+id);
  }

  @Post('upload')
  @UseInterceptors( FileInterceptor('roomFile'))
  //Método
  uploadFileRooms(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 4 }), //4 MB
          new FileTypeValidator({ fileType: '.(png|jpg|jpeg)' }),
        ]
      }),
    ) file: Express.Multer.File, @Body() body: uploadRoomtFile) {

      let url_cloudinary: string = "";
      let executeFile = this.cloudinaryService.uploadFile(file);
      
      executeFile.then( p  => {

        url_cloudinary = p.url;
        const dateNow = new Date();
        const { createUserAt, notes ,room } = body;

        const objReg: uploadRoomtFile = {
          url: url_cloudinary,
          notes: notes,
          room: room,
          createUserAt: createUserAt,
          createDateAt: dateNow
        }

        this.roomsService.createRoomImage(objReg);

      })

      return executeFile;

  }

}
