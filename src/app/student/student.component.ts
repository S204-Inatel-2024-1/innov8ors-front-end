import { Component } from '@angular/core';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersDataService } from '../services/users-data.service';
import { CommonModule } from '@angular/common';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [MatExpansionModule, MatAccordion, MatButton, CommonModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  constructor(private route: ActivatedRoute, private userDataService: UsersDataService, private router: Router) { }
  panelOpenState: boolean = false;
  // Obtendo dados
  teams = this.userDataService.getTeams();
  phaseName = String(this.route.snapshot.paramMap.get('phaseName'));

  id: number[] = [];
  name: number[] = [];
  advisorName: number[] = [];
  status: number[] = [];

  ngOnInit() {
    for (var i in this.teams) {
      this.id[i] = this.teams[i]["id"];
      this.name[i] = this.teams[i]["name"];
      this.advisorName[i] = this.teams[0]["advisor"]["name"];
      this.status[i] = this.teams[0]["active"];
    }
  }

  seeDetails(){
    this.router.navigate(['/proj-details']);
  }

}
