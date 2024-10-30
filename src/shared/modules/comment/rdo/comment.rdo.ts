import { Expose } from 'class-transformer';

export class CommentRdo {
  @Expose()
  public id: string;

  @Expose()
  public offerId: string;

  @Expose()
  public text: string;

  @Expose()
  public rating: number;
}
