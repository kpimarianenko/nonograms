import { GraphQLError, GraphQLErrorOptions } from 'graphql';

export enum ErrorCode {
  BadRequest = 'BAD_REQUEST_ERROR',
  Unauthorized = 'UNAUTHORIZED_ERROR',
  Forbidden = 'FORBIDDEN_ERROR',
  NotFound = 'NOT_FOUND_ERROR',
  InternalServerError = 'INTERNAL_SERVER_ERROR',
  NotImplemented = 'NOT_IMPLEMENTED_ERROR'
}

const getOptions = (options: GraphQLErrorOptions, errorCode: ErrorCode) => ({
  ...options,
  extensions: {
    code: errorCode,
    ...options.extensions
  }
});

export class BadRequestHTTPError extends GraphQLError {
  constructor(message: string, options: GraphQLErrorOptions = {}) {
    super(message, getOptions(options, ErrorCode.BadRequest));
  }
}

export class UnauthorizedHTTPError extends GraphQLError {
  constructor(message: string, options: GraphQLErrorOptions = {}) {
    super(message, getOptions(options, ErrorCode.Unauthorized));
  }
}

export class ForbiddenHTTPError extends GraphQLError {
  constructor(message: string, options: GraphQLErrorOptions = {}) {
    super(message, getOptions(options, ErrorCode.Forbidden));
  }
}

export class NotFoundHTTPError extends GraphQLError {
  constructor(message: string, options: GraphQLErrorOptions = {}) {
    super(message, getOptions(options, ErrorCode.NotFound));
  }
}

export class InternalServerHTTPError extends GraphQLError {
  constructor(message: string, options: GraphQLErrorOptions = {}) {
    super(message, getOptions(options, ErrorCode.InternalServerError));
  }
}

export class NotImplementedHTTPError extends GraphQLError {
  constructor(message: string, options: GraphQLErrorOptions = {}) {
    super(message, getOptions(options, ErrorCode.NotImplemented));
  }
}
