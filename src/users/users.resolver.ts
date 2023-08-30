import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { UsersService } from './users.service';
import { CreateUserModel } from 'src/graphql';

@Resolver()
export class UsersResolver {
	constructor(private usersService: UsersService) {}

	@Query('getAllUsers')
	async getAllUsers() {
		return this.usersService.getAllUsers();
	}

	@Mutation('createUser')
	async createUser(@Args('input') input: CreateUserModel) {
		console.log(input);
		return this.usersService.createUser({
			name: input.name,
			email: input.email,
		});
	}
}
