export class Item {
  readonly id: number;
  completed: boolean;
  title: string;

  constructor(title: string, itemId?: number, completed?: boolean) {
    this.title = title;
    this.id = itemId || null;
    this.completed = completed || false;
  }

  toggleCompleted(event): void {
    this.completed = !this.completed;
  }
}
