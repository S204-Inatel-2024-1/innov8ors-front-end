import { Component } from '@angular/core';
import { UsersDataService } from '../services/users-data.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls:['./auth.component.css']
})
export class AuthComponent {
  textoUsuario: string = '';
  senhaUsuario: string = ''
  attempt: boolean = false;
  loading: boolean = false;
  repos: string[] = [];
  role: string = '';
  name: string = '';

  errorMessage: string = '';
  constructor(private router: Router, private userDataService: UsersDataService) {}

  verificarUser() {
    this.loading = true;
    this.userDataService.tryLogin(this.textoUsuario, this.senhaUsuario).subscribe(
      (response: any) =>{
        this.repos = response;
        this.role = response["User"]["role"];
        this.name = response["User"]["email"];
        console.log();
        if(this.role == '[ROLE_ADMIN]'){
          this.router.navigate(['/adm', this.name]);
        }else{
          if(this.role == '[ROLE_ADVISOR]'){
            this.router.navigate(['/advisor']);
          }else{
            this.router.navigate(['/student']);
          }
        }
      },
      (error) => {                              //error() callback
        console.error('Request failed with error')
        this.errorMessage = error;
        this.loading = false;
        this.attempt = true;
      });
  }

}
