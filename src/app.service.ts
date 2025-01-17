import { Injectable, Inject } from '@nestjs/common'
import { CreateDto } from './dto/create.dto'
import { DatabaseService } from './database/database.service'

@Injectable()
export class AppService {
	constructor(
		@Inject('TEST') private test: number,
		private readonly dbService: DatabaseService
	) {}
	getHello(): string {
		return 'Hello World!'
	}

	async save(dto: CreateDto) {
		console.log(this.test)
		return this.dbService.post.create({
			data: dto,
		})
	}
	async get() {
		console.log(this.test)
		return this.dbService.post.findMany()
	}
}
