import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ActivatedRoute } from '@angular/router';
import { Location, CommonModule } from '@angular/common';
import { UsersDataService } from '../services/users-data.service';

@Component({
  selector: 'app-proj-details',
  standalone: true,
  imports: [
    MatExpansionModule, 
    MatFormFieldModule,MatButton,
    CommonModule],
  templateUrl: './proj-details.component.html',
  styleUrl: './proj-details.component.css'
})
export class ProjDetailsComponent {
  constructor(private route: ActivatedRoute, private location: Location, private userDataService: UsersDataService) { }
  panelOpenState: boolean = false;
  id = this.route.snapshot.paramMap.get('i');
  json:any;
  name = '';
  membros = [];
  notas = [];
  notas_phase:number[] = [];
  names_phase:string[] = [];
  member_emails:string[] = [];
  member_names:string[] = [];
  phaseNames = [];

  ngOnInit(){
    this.json = this.userDataService.getTeamsDetails();
    // Dados do json
    this.name = this.json["teamName"];
    this.membros = this.json["members"];
    this.notas = this.json["grades"];

    for (let member of this.membros) {
      this.member_emails.push(member["name"]);
      this.member_names.push(member["email"]);
    }
    
    for (let nota of this.notas) {
      this.names_phase.push(nota["phaseName"]);
      this.notas_phase.push(nota["grade"]);
    }
    console.log(this.names_phase);
  }

  goBack(){
    this.location.back();
  }
}
