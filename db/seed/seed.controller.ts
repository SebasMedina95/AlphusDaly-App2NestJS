import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeedService } from './seed.service';

import { ThematicSeedService } from './services/thematic.seed.service';
import { RoomSeedService } from './services/room.seed.service';
import { PersonSeedService } from './services/person.seed.service';
import { ProductSeedService } from './services/product.seed.service';

@Controller('seed')
export class SeedController {
  
  constructor(
    private readonly seedService: SeedService,
    private readonly thematicSeedService: ThematicSeedService,
    private readonly roomSeedService: RoomSeedService,
    private readonly personSeedService: PersonSeedService,
    private readonly productSeedService: ProductSeedService,
  ) {}

  @Get('/thematics')
  executeThematicsSeed() { return this.thematicSeedService.insertNewThematics(); }

  @Get('/rooms')
  executeRoomsSeed() { return this.roomSeedService.insertNewRooms(); }

  @Get('/persons')
  executePersonsSeed() { return this.personSeedService.insertNewPersons(); }

  @Get('/products')
  executeProductsSeed() { return this.productSeedService.insertNewProducts(); }
  
}
