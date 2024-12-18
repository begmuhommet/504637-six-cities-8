export class HttpError extends Error {
  public status: number;
  public details?: unknown;

  constructor(status: number, message: string, details?: string) {
    super(message);
    this.message = message;
    this.status = status;
    this.details = details;
  }

}
