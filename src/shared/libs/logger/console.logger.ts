import { getErrorMessage } from '../../helpers/common.js';
import { ILogger } from './logger.interface.js';

export class ConsoleLogger implements ILogger {
  warning(msg: string, ...args: unknown[]): void {
    console.warn(msg, ...args);
  }

  public debug(message: string, ...args: unknown[]): void {
    console.debug(message, ...args);
  }

  public error(message: string, error: Error, ...args: unknown[]): void {
    console.error(message, ...args);
    console.error(`Error message: ${getErrorMessage(error)}`);
  }

  public info(message: string, ...args: unknown[]): void {
    console.info(message, ...args);
  }

  public warn(message: string, ...args: unknown[]): void {
    console.warn(message, ...args);
  }
}
