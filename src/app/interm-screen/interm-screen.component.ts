import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UsersDataService } from '../services/users-data.service';

@Component({
  selector: 'app-interm-screen',
  templateUrl: './interm-screen.component.html',
  styleUrl: './interm-screen.component.css'
})
export class IntermScreenComponent {
  constructor(private route: ActivatedRoute, private router: Router, private userDataService: UsersDataService) { }
  name = this.route.snapshot.paramMap.get('name');
  bearer = this.route.snapshot.paramMap.get('bearer');
  role = this.route.snapshot.paramMap.get('role');
  loading: boolean = false;
  errorMessage: string = '';

  handleAdvisor(bearer: any){
      let phaseName = '';
      let teams = [];
      this.loading = true;
      this.errorMessage = "";
      this.userDataService.handleAdvisor(bearer)
        .subscribe(
          (response) => {    
            this.loading = false;
            phaseName = response["fetinPhase"]["phaseName"];
            teams = response["teams"];
            this.userDataService.setTeams(teams);
            this.router.navigate(['/advisor', phaseName]);
          },
          (error) => {                              
            console.error('Request failed with error')
            this.errorMessage = error;
            this.loading = false;
          },
          () => {                                 
            console.log('Request completed')      
            this.loading = false; 
          })
    }

    handleStudent(bearer: any){
      this.loading = true;
      this.errorMessage = "";
      this.userDataService.handleStudent(bearer)
        .subscribe(
          (response) => {    
            console.log(response)
          },
          (error) => {                              
            console.error('Request failed with error')
            this.errorMessage = error;
            this.loading = false;
          },
          () => {                                 
            console.log('Request completed')      
            this.loading = false; 
          })
    }

  goToPage() {
    if (this.role == '[ROLE_ADMIN]') {
      this.router.navigate(['/adm', this.bearer, this.name]);
    } else {
      if (this.role == '[ROLE_ADVISOR]') {
        this.handleAdvisor(this.bearer);
      } else {
        this.handleStudent(this.bearer);
      }
    }
  }
}
