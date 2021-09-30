import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pov } from 'src/app/models/pov';
import { Sceance } from 'src/app/models/sceance';
import { PovService } from 'src/app/services/pov.service';
import { SceanceService } from 'src/app/services/sceance.service';

@Component({
  selector: 'app-pov-detail',
  templateUrl: './pov-detail.component.html',
  styleUrls: ['./pov-detail.component.css']
})
export class PovDetailComponent implements OnInit {

  pov:Pov =new Pov();
  id:number;
  sceances:Sceance[];

  constructor(private povService:PovService,private route:ActivatedRoute,private sceanceService:SceanceService) { }

  ngOnInit(): void {

    this.id=this.route.snapshot.params[`id`];
    this.getPov(this.id);
    this.listPovSceance(this.id);

  }

  getPov(id:number){
    this.povService.getOnePov(id).subscribe(data=>{
      this.pov=data;
    })
  }

  listPovSceance(id:number){
    
  this.sceanceService.getSceanceByPov(id).subscribe(data=>{
  this.sceances=data;
})
  }


}
