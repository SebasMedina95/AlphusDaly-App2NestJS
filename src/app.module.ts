import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomsModule } from './modules/rooms/rooms.module';
import { dataSourceOptions } from '../db/data-source';
import { CommonModule } from './common/common.module';
// import { SeedModule } from './modules/seed/seed.module';
import { ProductsModule } from './modules/products/products.module';
import { ReservationsModule } from './modules/reservations/reservations.module';
import { ConsumersModule } from './modules/consumers/consumers.module';
import { PersonsModule } from './modules/persons/persons.module';
import { SeedModule } from '../db/seed/seed.module';

@Module({
  imports: [

    ConfigModule.forRoot({ isGlobal: true }),

    TypeOrmModule.forRoot(dataSourceOptions),

    CommonModule,
    ConsumersModule,
    PersonsModule,
    ProductsModule,
    ReservationsModule,
    RoomsModule,
    SeedModule

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
