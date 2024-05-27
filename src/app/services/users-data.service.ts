import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  urlBase: string = "https://github-actions-service-smc757oxwq-uc.a.run.app/api/v1";
  private dataArray: any[];

  constructor(private http: HttpClient) {
    this.dataArray = [];
  }

  // Requisições para API
  tryLogin(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.urlBase + '/auth/login', {
      "email": email,
      "password": password
    })
  }

  tryUpdate(jsonData:any, bearer:string):Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${bearer}`
    });
    const json = {
      "teamName": "teste",
      "members": [
        {
          "name": "ola",
          "email": "ola@ola"
        }
      ],
      "advisor": {
        "name": "teste",
        "email": "teset2"
      }
    }

    return this.http.post<any>(this.urlBase + '/adm/teams/register', json, {headers:headers})
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
      this.urlBase + '/member',
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

  // Configurações de array
  setTeams(data: any[]){
    this.dataArray = data;
  }

  getTeams(){
    return this.dataArray;
  }

}
