import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { CreateCatDto } from 'src/dto/createCat.dto';

@Controller('cats')
export class CatsController {
  @Get()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }
  @Get('findCat')
  findCat(): string {
    return 'Find specific cat';
  }
  @Post('createNewCat')
  create(@Body() createCatDto: CreateCatDto): any {
    console.log('Create a new cat ', createCatDto);
    return 'This action adds a new cat';
  }
}
