import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { TypeApp } from 'src/app/models/type-app';
import { ConfirmationService } from 'src/app/services/confirmation.service';
import { TypeService } from 'src/app/services/type.service';
import { CreateTypeComponent } from '../create-type/create-type.component';
import { UpdateTypeComponent } from '../update-type/update-type.component';


@Component({
  selector: 'app-list-type',
  templateUrl: './list-type.component.html',
  styleUrls: ['./list-type.component.css']
})
export class ListTypeComponent implements OnInit {

  types:TypeApp[];
  constructor(private typeService:TypeService,private dialog:MatDialog,private confirmation:ConfirmationService) { }

  ngOnInit(): void {
    this.getTypes();
  }

  private getTypes(){
    this.typeService.getTypeList().subscribe(data=>{
      this.types=data;
    })
  }

  onCreate(){
    this.dialog.open(CreateTypeComponent);
  }

  updateType(type:TypeApp){
      const dialogConfig=new MatDialogConfig();

      dialogConfig.data={
        id_type:type.id_type,
        libelleType:type.libelleType,
      };
      this.dialog.open(UpdateTypeComponent,dialogConfig);
  }

 /* deleteType(id:number){
    this.typeService.deleteType(id).subscribe(data=>{
      console.log(data);

      this.getTypes();
    });
  }

*/
deleteType(id:number){
this.confirmation.openConfirmDialog('Êtes-vous sûr de supprimer cet Enregistrement ?').afterClosed().subscribe(res=>{
  if(res){
    this.typeService.deleteType(id).subscribe(data=>{
      console.log(data);

      this.getTypes();
    });
  }
});
}


}
