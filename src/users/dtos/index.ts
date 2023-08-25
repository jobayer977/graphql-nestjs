import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateUserDTO {
	@IsString()
	@IsNotEmpty()
	@Field()
	name: string;

	@IsString()
	@IsNotEmpty()
	@Field()
	email: string;
}

@ObjectType()
export class UserDTO {
	@IsString()
	@IsNotEmpty()
	@Field()
	name: string;

	@IsString()
	@IsNotEmpty()
	@Field()
	email: string;

	@IsString()
	@IsNotEmpty()
	@Field()
	id: string;
}
