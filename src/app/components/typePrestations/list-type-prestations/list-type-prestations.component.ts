import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TypePrestation } from 'src/app/models/type-prestation';
import { ConfirmationService } from 'src/app/services/confirmation.service';
import { TypePrestationService } from 'src/app/services/type-prestation.service';
import { CreateTypePrestationComponent } from '../create-type-prestation/create-type-prestation.component';
import { UpdateTypePrestationComponent } from '../update-type-prestation/update-type-prestation.component';

@Component({
  selector: 'app-list-type-prestations',
  templateUrl: './list-type-prestations.component.html',
  styleUrls: ['./list-type-prestations.component.css']
})
export class ListTypePrestationsComponent implements OnInit {

  prestations:TypePrestation[];
  page:number=1;
  totalRecords:string; 

  constructor(private typePrestationService:TypePrestationService,
              private dialog:MatDialog,
              private confirmation:ConfirmationService,
              ) { }

  ngOnInit(): void {
    this.getTypePrestations();
    
  }

  private getTypePrestations(){
      this.typePrestationService.getTypePrestationList().subscribe(data=>{
        this.prestations=data;
        
      });
  }
  onCreate(){
    this.dialog.open(CreateTypePrestationComponent);
  }

  updateTypePrestation(prestation:TypePrestation){
    const dialogConfig=new MatDialogConfig();
    dialogConfig.data={
      id_perstation:prestation.id_perstation,
      libellePerstation:prestation.libellePerstation,
    };
    this.dialog.open(UpdateTypePrestationComponent,dialogConfig);
  }

 /* deleteTypePrestation(id:number){
    this.typePrestationService.deleteTypePrestation(id).subscribe(data=>{
      console.log(data);
      this.getTypePrestations();
    })
  } */

  deleteTypePrestation(id:number){
    this.confirmation.openConfirmDialog('Êtes-vous sûr de supprimer cet Enregistrement ?').afterClosed().subscribe(res=>{
      if(res){
        this.typePrestationService.deleteTypePrestation(id).subscribe(data=>{
          console.log(data);
          this.getTypePrestations();
        })
      }
    })
  }

  // oreder by
  key:string='libellePerstation';
  reverse:boolean=false;
  sort(key){
    this.key=key;
    this.reverse = !this.reverse;
  }

  // recherche
  libellePerstation:any;
Search(){
  if(this.libellePerstation == ""){
    this.ngOnInit();
  }else{
    this.prestations=this.prestations.filter(res=>{
      return res.libellePerstation.toLocaleLowerCase().match(this.libellePerstation.toLocaleLowerCase())
    })
  }
}

}
