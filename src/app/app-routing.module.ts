import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from '../app/details/app.details.component';
import { TemplatesComponent } from '../app/templates/app.templates.component'

const appRoutes: Routes = [
  { path: 'templates', component: TemplatesComponent },
  { path: 'login', component: DetailsComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
