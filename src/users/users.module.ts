import { ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

@Module({
	imports: [
		GraphQLModule.forRoot({
			autoSchemaFile: true,
			driver: ApolloDriver,
		}),
	],
	controllers: [],
	providers: [UsersService, UsersResolver],
})
export class UsersModule {}
