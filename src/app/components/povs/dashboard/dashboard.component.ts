import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Pov } from 'src/app/models/pov';

import { PovService } from 'src/app/services/pov.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  povs:Pov[];
  page:number=1;
  totalRecords:string; 
  

  @ViewChild('showPovInfo', { read: TemplateRef, static: true })
  showPovInfoTemplate: TemplateRef<Pov>;

  constructor(private povService:PovService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.getPovs();
  }

  private getPovs(){
    this.povService.getPovList().subscribe(data=>{
      this.povs=data;
    });
  }

  infoPov(id:number){
    this.povService.getPovInfo(id).subscribe(data=>{
      const dialogConfig = new MatDialogConfig();
  
      dialogConfig.data = {
        id_pov:data.id_pov,
        dateDebut:data.dateDebut,
        dateFin:data.dateFin,
        nbrSeance:data.nbrSeance,
      };
      this.dialog.open(this.showPovInfoTemplate,dialogConfig);
    })
  }
// oreder by
  key:string='libellePov';
  reverse:boolean=false;
  sort(key){
    this.key=key;
    this.reverse = !this.reverse;
  }

  // recherche
  libellePov:any;
  Search(){
    if(this.libellePov == ""){
      this.ngOnInit();
    }else{
      this.povs=this.povs.filter(res=>{
        return res.libellePov.toLocaleLowerCase().match(this.libellePov.toLocaleLowerCase())
      })
    }
  }

}
