import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { TeamGeneratorComponent } from './team-generator/team-generator.component'

const routes: Routes = [
  { path: '', component: TeamGeneratorComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
