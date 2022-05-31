import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'; 
import { Observable } from 'rxjs';
import { Client } from '../client';
import { ClientService } from '../client.service';




import { Mission } from '../mission';
import { MissionService } from '../mission.service';

@Component({
  selector: 'app-form-mission',
  templateUrl: './form-mission.component.html',
  styleUrls: ['./form-mission.component.scss']
})
export class FormMissionComponent implements OnInit {

  mission: Mission= new  Mission();
  client: Client = new Client();
  clients: Observable<Client[]>;
  submitted = false;
  data: string;
  constructor(private missionService: MissionService, private clientService: ClientService , private router: Router) { }

  ngOnInit(): void {

  }
  getClient(){

      localStorage.setItem('data', JSON.stringify(this.clientService.getClientList()));
      this.data = JSON.parse(localStorage.getItem('data'));
    
  

  }
  newMission(): void {
    this.submitted = false;
    this.mission = new Mission();
  }

  save() {
    this.missionService
    .createMission(this.mission).subscribe(data => {
      console.log(data)
      this.mission = new Mission();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/mission/add/12']);
  }
}




