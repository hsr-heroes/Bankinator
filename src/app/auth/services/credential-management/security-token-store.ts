import {Injectable} from '@angular/core';

/**
 * TODO: Add localStorage logic here...
 */
@Injectable()
export class SecurityTokenStore {
  private token:SecurityToken;

  constructor() {
    this.token = {
      token: localStorage.getItem('token'),
      owner: null
    };
  }

  public get storedValue():SecurityToken {
    return this.token;
  }

  public set storedValue(value:SecurityToken) {
    this.token = value;
    localStorage.setItem('token', this.token.token);
  }
}

export interface SecurityToken {
  token: string,
  owner: any
}
