import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

@Injectable()
export class DatabaseService extends PrismaClient {
	async onModuleInit() {
		// хук onModuleInit для подключения к БД
		await this.$connect()
	}

	async onModuleDestroy() {
		await this.$disconnect()
	}

	// async enableShutdownHooks(app: INestApplication) {
	// 	this.$on('beforeExit', async () => {
	// 		await app.close()
	// 	})
	// }
}
