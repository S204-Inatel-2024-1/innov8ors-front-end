import { RouterModule, Routes } from '@angular/router';
import { AdvisorComponent } from './advisor/advisor.component';
import { AuthComponent } from './auth/auth.component';
import { StudentComponent } from './student/student.component';
import { AdmComponent } from './adm/adm.component';
import { UpdaterComponent } from './updater/updater.component';
import { NgModule } from '@angular/core';
import { ProjCreatorComponent } from './proj-creator/proj-creator.component';
import { IntermScreenComponent } from './interm-screen/interm-screen.component';
import { HelpPageComponent } from './help-page/help-page.component';
import { ProjDetailsComponent } from './proj-details/proj-details.component';

const routes: Routes = [    
    { path: 'auth', component: AuthComponent },
    { path: 'advisor/:phaseName', component: AdvisorComponent },
    { path: 'student/:phaseName/:bearer', component: StudentComponent },
    { path: 'adm/:bearer/:name', component:AdmComponent },
    { path: 'updater', component:UpdaterComponent },
    { path: 'create-proj/:bearer', component:ProjCreatorComponent },
    { path: 'interm-screen/:bearer/:name/:role', component:IntermScreenComponent },
    { path: 'help-page', component:HelpPageComponent },
    { path: 'proj-details/:i', component:ProjDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }