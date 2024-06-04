import { RouterModule, Routes } from '@angular/router';
import { AdvisorComponent } from './advisor/advisor.component';
import { AuthComponent } from './auth/auth.component';
import { StudentComponent } from './student/student.component';
import { AdmComponent } from './adm-teams/adm-teams.component';
import { UpdaterComponent } from './updater/updater.component';
import { NgModule } from '@angular/core';
import { ProjCreatorComponent } from './proj-creator/proj-creator.component';
import { IntermScreenComponent } from './interm-screen/interm-screen.component';
import { HelpPageComponent } from './help-page/help-page.component';
import { ProjDetailsComponent } from './proj-details/proj-details.component';
import { AdmFetinStagesComponent } from './adm-fetin-stages/adm-fetin-stages.component';

const routes: Routes = [    
    { path: 'auth', component: AuthComponent },
    { path: 'advisor/:phaseName/:bearer', component: AdvisorComponent },
    { path: 'student/:phaseName/:bearer', component: StudentComponent },
    { path: 'adm-teams/:bearer/:name', component:AdmComponent },
    { path: 'updater/:bearer', component:UpdaterComponent },
    { path: 'create-proj/:bearer', component:ProjCreatorComponent },
    { path: 'interm-screen/:bearer/:name/:role', component:IntermScreenComponent },
    { path: 'help-page', component:HelpPageComponent },
    { path: 'proj-details/:i', component:ProjDetailsComponent },
    { path: 'adm-fetinStages', component:AdmFetinStagesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }