import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../classes/user';
import {UserListResponse} from '../classes/user-list-response';
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
   this.loadUsers();
  }

  goToUser(id: number): void  {
    this.router.navigate(['/user-detail', id]);
  }

  deleteUser(id: number): void {
    this.httpclient.delete('http://localhost:8080/user/' + id).subscribe(data => {
      console.log(data);
      this.loadUsers();
    });
  }

  loadUsers(): void{
    this.httpclient.get<UserListResponse>('http://localhost:8080/user').subscribe(data =>
      this.userList = data.response
    );
  }

  addUser(): void{
    this.router.navigate(['/user-detail', 0]);
  }
}
