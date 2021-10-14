import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Sceance } from 'src/app/models/sceance';
import { ConfirmationService } from 'src/app/services/confirmation.service';
import { SceanceService } from 'src/app/services/sceance.service';
import { CreateSceanceComponent } from '../create-sceance/create-sceance.component';
import { UpdateSceanceComponent } from '../update-sceance/update-sceance.component';

@Component({
  selector: 'app-list-sceance',
  templateUrl: './list-sceance.component.html',
  styleUrls: ['./list-sceance.component.css']
})
export class ListSceanceComponent implements OnInit {

  sceances:Sceance[];
  page:number=1;
  totalRecords:string; 


  constructor(private sceanceService:SceanceService,
              private dialog:MatDialog,
              private confirmation:ConfirmationService
  ) { }

  ngOnInit(): void {
    this.getSceances();
  }

  private getSceances(){
    this.sceanceService.getSceanceList().subscribe(data=>{
      this.sceances=data;
    })
  }
  onCreate(){
    this.dialog.open(CreateSceanceComponent);
  }

  updateSceance(sceance:Sceance){
    const dialogConfig=new MatDialogConfig();
    dialogConfig.data={
      id_sceance:sceance.id_sceance,
      dateSceance:sceance.dateSceance,
      resumer:sceance.resumer,
      participants:sceance.participants,
      id_pov:sceance.id_pov,
      libellePov:sceance.libellePov,

    };
    this.dialog.open(UpdateSceanceComponent,dialogConfig);
  }

/*  deleteSceance(id:number){
    this.sceanceService.deleteSceance(id).subscribe(data=>{
      console.log(data);
      this.getSceances();
    });
  }
*/
deleteSceance(id:number){
this.confirmation.openConfirmDialog('Êtes-vous sûr de supprimer cet Enregistrement ?').afterClosed().subscribe(res=>{
  if(res){
    this.sceanceService.deleteSceance(id).subscribe(data=>{
      console.log(data);
      this.getSceances();
    });
  }
})
}

// oreder by
key:string='dateSceance';
reverse:boolean=false;
sort(key){
  this.key=key;
  this.reverse = !this.reverse;
}


}
