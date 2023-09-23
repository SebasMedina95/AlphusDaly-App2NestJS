import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { Room } from './entities/room.entity';
import { ThematicRoom } from './entities/room-thematic.entity';
import { ImagesRoom } from './entities/room-images.entity';

import { RoomsController } from './controllers/rooms.controller';
import { ThematicsController } from './controllers/thematics.controller';

import { RoomsService } from './services/rooms.service';
import { ThematicsService } from './services/thematics.service';
import { CloudinaryService } from '../../common/cloudinary/cloudinary.service';

@Module({
  controllers: [
    RoomsController,
    ThematicsController
  ],
  providers: [
    RoomsService,
    ThematicsService,
    CloudinaryService
  ],
  imports: [
    TypeOrmModule.forFeature([
      Room,
      ImagesRoom,
      ThematicRoom
    ])
  ],
  exports: [
    RoomsService,
    ThematicsService,
    TypeOrmModule
  ]
})
export class RoomsModule {}
