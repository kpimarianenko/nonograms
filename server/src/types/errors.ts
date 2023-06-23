import { GraphQLError, GraphQLErrorOptions } from 'graphql';

import { Status } from './status';

export enum ErrorCode {
  BadRequest = 'BAD_REQUEST_ERROR',
  Unauthorized = 'UNAUTHORIZED_ERROR',
  Forbidden = 'FORBIDDEN_ERROR',
  NotFound = 'NOT_FOUND_ERROR',
  InternalServerError = 'INTERNAL_SERVER_ERROR',
  NotImplemented = 'NOT_IMPLEMENTED_ERROR'
}

const getOptions = (options: GraphQLErrorOptions, status: Status, errorCode: ErrorCode) => ({
  ...options,
  extensions: {
    code: errorCode,
    ...options.extensions,
    http: {
      status,
      ...(options.extensions?.http || {})
    }
  }
});

export class BadRequestHTTPError extends GraphQLError {
  constructor(message: string, options: GraphQLErrorOptions = {}) {
    super(message, getOptions(options, Status.BadRequest, ErrorCode.BadRequest));
  }
}

export class UnauthorizedHTTPError extends GraphQLError {
  constructor(message: string, options: GraphQLErrorOptions = {}) {
    super(message, getOptions(options, Status.Unauthorized, ErrorCode.Unauthorized));
  }
}

export class ForbiddenHTTPError extends GraphQLError {
  constructor(message: string, options: GraphQLErrorOptions = {}) {
    super(message, getOptions(options, Status.Forbidden, ErrorCode.Forbidden));
  }
}

export class NotFoundHTTPError extends GraphQLError {
  constructor(message: string, options: GraphQLErrorOptions = {}) {
    super(message, getOptions(options, Status.NotFound, ErrorCode.NotFound));
  }
}

export class InternalServerHTTPError extends GraphQLError {
  constructor(message: string, options: GraphQLErrorOptions = {}) {
    super(message, getOptions(options, Status.InternalServerError, ErrorCode.InternalServerError));
  }
}

export class NotImplementedHTTPError extends GraphQLError {
  constructor(message: string, options: GraphQLErrorOptions = {}) {
    super(message, getOptions(options, Status.NotImplemented, ErrorCode.NotImplemented));
  }
}
