import { Arg, Mutation, Query, Resolver } from 'type-graphql';

import User from '@schema/users.schema';

@Resolver(() => User)
class UsersResolver {
  @Query(() => [User])
  async getUsers(): Promise<User[]> {
    return User.find();
  }

  @Query(() => User, { nullable: true })
  async getUser(@Arg('id') id: string): Promise<User | null> {
    return User.findOneBy({ id });
  }

  @Mutation(() => User)
  async createUser(@Arg('name') name: string): Promise<User> {
    return User.save({ name });
  }
}

export default UsersResolver;
