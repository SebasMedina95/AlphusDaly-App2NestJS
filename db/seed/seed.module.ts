import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';

import { SeedController } from './seed.controller';

import { RoomsModule } from '../../src/modules/rooms/rooms.module';
import { PersonsModule } from '../../src/modules/persons/persons.module';
import { ProductsModule } from '../../src/modules/products/products.module';

import { ThematicSeedService } from './services/thematic.seed.service';
import { RoomSeedService } from './services/room.seed.service';
import { PersonSeedService } from './services/person.seed.service';
import { ProductSeedService } from './services/product.seed.service';

@Module({
  controllers: [
    SeedController
  ],
  providers: [
    SeedService,
    ThematicSeedService,
    RoomSeedService,
    PersonSeedService,
    ProductSeedService
  ],
  imports: [
    RoomsModule,
    PersonsModule,
    ProductsModule
  ]
})
export class SeedModule {}
