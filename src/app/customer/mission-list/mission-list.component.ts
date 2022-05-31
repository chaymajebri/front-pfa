import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Mission } from '../mission';
import { MissionService } from '../mission.service';

@Component({
  selector: 'app-mission-list',
  templateUrl: './mission-list.component.html',
  styleUrls: ['./mission-list.component.scss']
})
export class MissionListComponent implements OnInit {
  missions: Observable<Mission[]>;

  constructor(private missionService: MissionService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.missions = this.missionService.getmissionsList();
  }

  deleteMission(id: number) {
    this.missionService.deleteMission(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  missionDetails(id: number){
    this.router.navigate(['/mission/find', id]);
  }

  updateMission(id: number){
    this.router.navigate(['/mission/update', id]);
  }
}






