import { Arg, Mutation, Query, Resolver } from 'type-graphql';

import { User } from '../schema/users.schema';
import users from '../data/users.data';

@Resolver(() => User)
class UsersResolver {
  @Query(() => [User])
  async getUsers(): Promise<User[]> {
    return users;
  }

  @Query(() => User)
  async getUser(@Arg('id') id: number): Promise<User | undefined> {
    return users.find(u => u.id === id);
  }

  @Mutation(() => User)
  async createUser(@Arg('name') name: string): Promise<User> {
    const id = users.length + 1;
    const newUser = {
      id,
      name
    };

    users.push(newUser);

    return newUser;
  }
}

export default UsersResolver;
