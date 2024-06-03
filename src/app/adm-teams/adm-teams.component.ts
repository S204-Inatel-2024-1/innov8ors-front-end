import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButton } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterLink, RouterLinkActive, RouterOutlet, Router, ActivatedRoute } from '@angular/router';
import { UsersDataService } from '../services/users-data.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-adm',
  standalone: true,
  imports: [
    MatButtonModule, 
    MatButton, 
    MatExpansionModule, 
    MatFormFieldModule,
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive,
    CommonModule],
  templateUrl: './adm-teams.component.html',
  styleUrl: './adm-teams.component.css'
})
export class AdmComponent {
  panelOpenState: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, private userDataService: UsersDataService) {}
  name = this.route.snapshot.paramMap.get('name');
  bearer = this.route.snapshot.paramMap.get('bearer');
  teams = this.userDataService.getTeamsDetails();
  teams_names:any;


  ngOnInit(){
    let arr = [];
    let arr2:any;
    arr = Object.entries(this.teams);
    arr2 = arr[0][1];
    this.teams_names = Object.values(arr2);
    console.log(this.teams_names);
    return this.teams_names;
  }

  updateData(){
    this.router.navigate(['/updater']);
  }
  createProject(){
    this.router.navigate(['/create-proj', this.bearer])
  }

}
