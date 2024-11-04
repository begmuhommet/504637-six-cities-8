import { StatusCodes } from 'http-status-codes';
import { BaseUserException } from './base-user.exception.js';

export class UserPasswordIncorrectException extends BaseUserException {
  constructor() {
    super(StatusCodes.UNAUTHORIZED, 'Username or password is incorrect');
  }
}
