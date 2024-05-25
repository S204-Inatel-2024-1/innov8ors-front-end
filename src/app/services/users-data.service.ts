import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  urlBase: string = "https://github-actions-service-smc757oxwq-uc.a.run.app/api/v1";

  constructor(private http: HttpClient) {}

  tryLogin(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.urlBase + '/auth/login', {
      "email": email,
      "password": password
    })
  }

  handleAdvisor(bearer:string){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${bearer}`
    });
    return this.http.get<any>(
      this.urlBase + '/advisor',
      { 
        headers: headers 
      }
    )
  }

  handleStudent(bearer: string){
    const headers = new HttpHeaders({
      'Authorization': bearer
    });
    return this.http.get<any>(
      this.urlBase + '/student',
      { 
        headers: headers 
      }
    )
  }
  handleAdm(bearer: string){
    const headers = new HttpHeaders({
      'Authorization': bearer
    });
    return this.http.get<any>(
      this.urlBase + '/adm',
      { 
        headers: headers 
      }
    )
  }

}
