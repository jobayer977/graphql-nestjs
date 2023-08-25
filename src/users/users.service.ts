import { CreateUserDTO, UserDTO } from './dtos';

import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
	private users: UserDTO[] = [
		{ id: '1', name: 'John Doe', email: 'john@example.com' },
		{ id: '2', name: 'Jane Smith', email: 'jane@example.com' },
	];

	getAllUsers(): UserDTO[] {
		return this.users;
	}

	async createUser(user: CreateUserDTO): Promise<UserDTO> {
		this.users.push({
			...user,
			id: String(this.users.length + 1),
		});
		return this.users[this.users.length - 1];
	}
}
