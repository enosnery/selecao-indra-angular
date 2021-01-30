import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../classes/user';
import {UserResponse} from '../classes/user-response';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userList: Array<User>;

  constructor(private router: Router, private httpclient: HttpClient) { }

  ngOnInit(): void {
    this.httpclient.get<UserResponse>('http://localhost:8080/user').subscribe(data =>
      this.userList = data.response

    );
  }

  goToUser(id: number): void  {
    this.router.navigateByUrl('user-detail')
  }
}
