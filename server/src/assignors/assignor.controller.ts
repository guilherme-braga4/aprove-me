import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { AssignorService } from './assignor.service';
import { AssignorDto } from './dtos/assignor.dto';

@Controller('assignor')
export class AssignorController {
  constructor(private readonly service: AssignorService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async getAssignorsList(): Promise<AssignorDto[]> {
    return this.service.getAllAssignors();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async getAssignorsById(@Param('id') id: string): Promise<AssignorDto> {
    return this.service.getAssignor(id);
  }

  @Post()
  @HttpCode(HttpStatus.OK)
  async createAssignor(@Body() dto: AssignorDto) {
    return this.service.createAssignor(dto);
  }

  @Put('/:id')
  async updateAssignor(
    @Param('id') id: string,
    @Body() dto: AssignorDto,
  ): Promise<AssignorDto> {
    return this.service.updateAssignor(id, dto);
  }

  @Delete('/:id')
  async deleteAssignor(@Param('id') id: string): Promise<AssignorDto> {
    return this.service.deleteAssignor(id);
  }
}
