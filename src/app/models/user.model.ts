export class UserModel {
  private _id: number;
  private _name: string;
  private _status: string;

  constructor(id: number, name: string, status: string) {
    this._id = id;
    this._name = name;
    this._status = status;
  }

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get status(): string {
    return this._status;
  }

  public set status(status: string) {
    this._status = status;
  }
}
