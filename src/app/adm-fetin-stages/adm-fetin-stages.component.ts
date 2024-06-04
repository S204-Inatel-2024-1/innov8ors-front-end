import { Component } from '@angular/core';
import { UsersDataService } from '../services/users-data.service';

@Component({
  selector: 'app-adm-fetin-stages',
  templateUrl: './adm-fetin-stages.component.html',
  styleUrl: './adm-fetin-stages.component.css',
})
export class AdmFetinStagesComponent {
  constructor(private userDataService: UsersDataService){}
  panelOpenState: boolean = false;

  phases = this.userDataService.getFetinStages();
  phaseName: String[] = [];
  id: number[] = [];
  startDate: String[] = [];
  endDate: String[] = [];

  ngOnInit(){
    for (var i in this.phases) {
      this.id[i] = this.phases[i]["id"];
      this.phaseName[i] = this.phases[i]["name"];
      this.startDate[i] = this.phases[i]["start"];
      this.endDate[i] = this.phases[i]["endDate"];
    }
  }
}
