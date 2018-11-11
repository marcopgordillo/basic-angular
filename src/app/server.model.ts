export class ServerModel {
  name: string;
  capacity: number;
  id: number;

  constructor(name: string, capacity: number, id: number) {
    this.name = name;
    this.capacity = capacity;
    this.id = id;
  }
}
