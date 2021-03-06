import { Injectable } from '@angular/core';
import {Account} from '../../auth/models/account';
import {Observable} from 'rxjs/Observable';
import {Headers, Http, Response} from '@angular/http';
import {ResourceBase} from '../../auth/resources/resource-base';
import {BankAccount} from '../models/bankaccount';

@Injectable()
export class AccountService extends ResourceBase {

  constructor(http: Http) {
    super(http);
  }

  public getAccount(id: string = null): Observable<BankAccount> {
    const url = '/accounts' + (id && id !== '' ? `/${id}` : '');
    return this.get(url)
      .map((response: Response) => {
        const result = response.json();
        if (result) {
          return BankAccount.fromDto(result);
        }
        return null;
      })
      .catch((error: any) => {
        return Observable.of<BankAccount>(null);
      });
  }

}
