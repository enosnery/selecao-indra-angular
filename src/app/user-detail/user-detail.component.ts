import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {User} from '../classes/user';
import {UserResponse} from '../classes/user-response';
import {UpdateUserResponse} from '../classes/update-user-response';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  id: number;
  sub: any;
  newName: string;
  newLogin: string;
  newUser: User;

  @Input() user: User;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.sub = this.activatedRoute.params.subscribe(params =>
      this.id = params.id
    );
    this.loadUser();
  }

  loadUser(): void{
    if (this.id !== 0) {
      this.http.get<UserResponse>('http://localhost:8080/user/' + this.id).subscribe(data =>
        this.user = data.response
      );
    }
  }

  updateUser(): void{
    this.http.put<UpdateUserResponse>('http://localhost:8080/user', this.user).subscribe(data => {
        console.log(data);
        alert(data);
      });
  }

  addUser(): void {
    this.newUser = new User();
    this.newUser.name = this.newName;
    this.newUser.login = this.newLogin;
    this.http.post<UpdateUserResponse>('http://localhost:8080/user', this.newUser).subscribe(data => {
      console.log(data);
      alert(data.response);
      this.router.navigateByUrl('/user');
    });
  }

  voltar(): void{
    this.router.navigateByUrl('/user');
  }
}
