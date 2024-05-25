import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute } from '@angular/router';
import { UsersDataService } from '../services/users-data.service';

@Component({
  selector: 'app-advisor',
  standalone: true,
  imports: [MatExpansionModule, MatFormFieldModule, MatInputModule],
  templateUrl: './advisor.component.html',
  styleUrl: './advisor.component.css'
})
export class AdvisorComponent {
  constructor(private route: ActivatedRoute, private userDataService: UsersDataService) {}
  panelOpenState: boolean = false;
  bearer = String(this.route.snapshot.paramMap.get('bearer'));
  teste: string = '';
  loading: boolean = false;
  errorMessage: string = '';
  fetinPhase : string = '';

  panelOpened() {
    this.panelOpenState = true;
    this.getTeamsData();
  }

  getTeamsData() {
    this.loading = true;
    this.errorMessage = "";
    console.log(this.bearer);
    this.userDataService.handleAdvisor(this.bearer)
      .subscribe(
        (response) => {                           //next() callback
          console.log('response: ', response)
        },
        (error) => {                              //error() callback
          console.error('Request failed with error')
          this.errorMessage = error;
          this.loading = false;
        },
        () => {                                   //complete() callback
          console.log('Request completed')      //This is actually not needed 
          this.loading = false; 
        })
  }
}
