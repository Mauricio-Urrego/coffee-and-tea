export class product {
  readonly id: number;
  readonly title: string;
  readonly imageUrl: string;
  readonly type: string;

  constructor(data: { id: number, title: string, imageUrl: string, type: string }) {
    this.id= data.id;
    this.title = data.title;
    this.imageUrl = data.imageUrl;
    this.type = data.type;
  }
}
