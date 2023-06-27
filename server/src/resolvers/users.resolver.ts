import { Arg, Ctx, Query, Resolver } from 'type-graphql';

import { BadRequestHTTPError, Context, NotFoundHTTPError } from '@types';

import User, { GetUserInput } from '@models/users/schema';

@Resolver(() => User)
class UsersResolver {
  @Query(() => User)
  async getUser(
    @Arg('input') { id, username }: GetUserInput,
    @Ctx() { string }: Context
  ): Promise<User> {
    if (!id === !username) {
      throw new BadRequestHTTPError(string.errors.common.exactlyOneArgument);
    }

    const user = await User.findOneBy(id ? { id } : { username });

    if (!user) {
      throw new NotFoundHTTPError(
        id ? string.errors.user.idNotFound : string.errors.user.usernameNotFound
      );
    }

    return user;
  }
}

export default UsersResolver;
