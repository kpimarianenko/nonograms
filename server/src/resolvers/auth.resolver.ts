import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from 'type-graphql';

import { BadRequestHTTPError, Context } from '@types';

import { auth } from '@firebase';

import { Validate } from '@middlewares';

import { RegisterInput } from '@models/auth/schema';
import { registerSchema } from '@models/auth/validation';
import User from '@models/users/schema';

@Resolver()
class AuthResolver {
  @Mutation(() => User, { nullable: true })
  @UseMiddleware(Validate('input', registerSchema))
  async register(
    @Arg('input') input: RegisterInput,
    @Ctx() { string }: Context
  ): Promise<User | null> {
    if (await User.findOneBy({ username: input.username })) {
      throw new BadRequestHTTPError(string.errors.auth.usernameTaken);
    }

    const findByEmailQuery = User.createQueryBuilder().where('LOWER(email) = LOWER(:email)', {
      email: input.email
    });

    if (await findByEmailQuery.getOne()) {
      throw new BadRequestHTTPError(string.errors.auth.emailTaken);
    }

    const { uid } = await auth.createUser({
      email: input.email.toLowerCase(),
      displayName: input.username,
      password: input.password
    });

    return User.save({
      fbuid: uid,
      username: input.username,
      email: input.email
    });
  }
}

export default AuthResolver;
