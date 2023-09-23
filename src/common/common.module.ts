import { Module } from '@nestjs/common';
import { CloudinaryModule } from './cloudinary/cloudinary.module';

@Module({
  controllers: [],
  providers: [],
  imports: [CloudinaryModule],
})
export class CommonModule {}
