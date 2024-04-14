import {
	BadRequestException,
	Body,
	Controller,
	Get,
	Param,
	ParseIntPipe,
	Post,
	UsePipes,
	ValidationPipe,
	Inject,
} from '@nestjs/common'
import { AppService } from './app.service'
import { CreateDto } from './dto/create.dto'

@Controller('app')
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get('test')
	getHello(): string {
		return this.appService.getHello()
	}
	@Get('test/:id')
	getTestId(@Param('id', ParseIntPipe) id: number) {
		if (id < 1) {
			throw new BadRequestException('Id должен быть больше 0')
		}
		return { id: id }
	}

	@UsePipes(new ValidationPipe())
	@Post('create')
	async create(@Body() dto: CreateDto) {
		const res = await this.appService.save(dto)
		return res
	}
	@Get('get')
	async getAll() {
		const res = await this.appService.get()
		return res
	}
}
