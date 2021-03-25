export class Item {
  readonly id: number;
  completed: boolean;
  title: string;

  constructor(title: string) {
    this.title = title;
    this.id = Date.now();
    this.completed = false;
  }

  toggleCompleted(event): void {
    this.completed = !this.completed;
  }
}
