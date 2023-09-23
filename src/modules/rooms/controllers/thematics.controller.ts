import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    Query
} from '@nestjs/common';

import { CreateThematicDto } from '../dto/create-thematic.dto';
import { UpdateThematicDto } from '../dto/update-thematic.dto';

import { ThematicsService } from '../services/thematics.service';
import { PaginationDto } from '../../../common/dtos/pagination.dto';

@Controller('thematics')
export class ThematicsController {
    constructor(private readonly thematicsService: ThematicsService) { }

    @Post()
    create(@Body() createThematicDto: CreateThematicDto) {
        return this.thematicsService.create(createThematicDto);
    }

    @Get()
    findAll(@Query() paginationDto: PaginationDto) {
        return this.thematicsService.findAll(paginationDto);
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.thematicsService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() updateThematicDto: UpdateThematicDto) {
        return this.thematicsService.update(id, updateThematicDto);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.thematicsService.remove(id);
    }
}
