import { Arg, Query, Resolver } from 'type-graphql';

import User from '@models/users/schema';

@Resolver(() => User)
class UsersResolver {
  @Query(() => User, { nullable: true })
  async getUser(@Arg('id') id: string): Promise<User | null> {
    return User.findOneBy({ id });
  }
}

export default UsersResolver;
