import { ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { join } from 'path';

@Module({
  imports: [
    UsersModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schems.gql'),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
