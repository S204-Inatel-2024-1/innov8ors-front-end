import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute } from '@angular/router';
import { UsersDataService } from '../services/users-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-advisor',
  standalone: true,
  imports: [MatExpansionModule, MatFormFieldModule, MatInputModule, CommonModule],
  templateUrl: './advisor.component.html',
  styleUrl: './advisor.component.css'
})
export class AdvisorComponent {
  constructor(private route: ActivatedRoute, private userDataService: UsersDataService) {}
  panelOpenState: boolean = false;
  phaseName = String(this.route.snapshot.paramMap.get('phaseName'));
  teams = this.userDataService.getTeams();
  // Obtendo dados
  id = this.teams[0]["id"];
  name = this.teams[0]["name"];
  advisorName = this.teams[0]["advisor"]["name"];
  status = this.teams[0]["active"];

  panelOpened() {
    this.panelOpenState = true;
  }
}
