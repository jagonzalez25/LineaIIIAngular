import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from 'src/app/_service/login.service'
import { environment } from 'src/environments/environment';
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input()
  resultadoHija: number;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.login('admin', '123456').subscribe(data =>{
        //console.log(data);
        //localStorage

        /*const helper = new JwtHelperService();
        const decodedToken = helper.decodeToken(data.access_token);
        console.log(decodedToken);*/

        sessionStorage.setItem(environment.TOKEN, data.access_token);
        this.loginService.toolBarReactiva.next(false);
    });
  }

}
