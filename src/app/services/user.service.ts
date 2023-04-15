import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public users: User[] = [];
  public _printUser: {} = {};

  constructor(private httpClient: HttpClient) {}

  public printUser() {
    return (this._printUser = this.users[0]);
  }

  public getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>('http://localhost:3000/users').pipe(
      map((users: User[]) => {
        this.users = users;
        return users;
      })
    );
  }
}
