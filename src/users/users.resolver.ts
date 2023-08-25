import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { CreateUserDTO, UserDTO } from './dtos';
import { UsersService } from './users.service';

@Resolver()
export class UsersResolver {
	constructor(private readonly userService: UsersService) {}

	@Query(() => [UserDTO])
	async getAllUsers(): Promise<UserDTO[]> {
		return this.userService.getAllUsers();
	}

	@Mutation(() => UserDTO)
	async createUser(@Args('input') input: CreateUserDTO) {
		return this.userService.createUser(input);
	}
}
