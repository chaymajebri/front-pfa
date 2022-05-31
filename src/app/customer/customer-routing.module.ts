import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormMissionComponent } from './form-mission/form-mission.component';
import { MissionListComponent } from './mission-list/mission-list.component';

const routes: Routes = [
  {
    path: 'form',
    component:FormMissionComponent
  },
  {
    path: 'list',
    component:MissionListComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
