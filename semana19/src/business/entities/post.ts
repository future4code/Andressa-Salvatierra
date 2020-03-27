export class Post {
    constructor(
        private id: string,
        private image: string,
        private description: string,
        private creationDate: Date,
        private type: PostType
    ) {}

    public getId(): string {
        return this.id;
      }

    public getImage(): string {
        return this.image;
      }

    public getDescription(): string {
        return this.description;
      }

    public getcreationDate(): Date {
        return this.creationDate;
      }

    public getType(): PostType {
        return this.type;
      }
}

export enum PostType {
    normal = "normal",
    event = "event"
  }