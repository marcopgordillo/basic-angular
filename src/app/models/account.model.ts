export class AccountModel {
  private _name: string;
  private _status: string;

  constructor(name: string, status: string) {
    this._name = name;
    this._status = status;
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
