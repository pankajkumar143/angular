import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutusComponent } from './aboutus/aboutus.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';
import { ContactusComponent } from './contactus/contactus.component';
import {DatabindingComponent} from './databinding/databinding.component';

const routes: Routes = [
  // {path:'home'},
  {path:'Aboutus', component:AboutusComponent},
  {path:'projects', component:ProjectsComponent},
  {path:'services', component:ServicesComponent},
  {path:'Team', component:TeamComponent },
  {path:'ContactUs', component:ContactusComponent},
  {path:'DataBinding', component:DatabindingComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
