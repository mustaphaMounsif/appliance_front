import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Suivi } from 'src/app/models/suivi';
import { ConfirmationService } from 'src/app/services/confirmation.service';
import { SuiviService } from 'src/app/services/suivi.service';
import { CreateSuiviComponent } from '../create-suivi/create-suivi.component';
import { UpdateSuiviComponent } from '../update-suivi/update-suivi.component';

@Component({
  selector: 'app-list-suivi',
  templateUrl: './list-suivi.component.html',
  styleUrls: ['./list-suivi.component.css']
})
export class ListSuiviComponent implements OnInit {

  
  suivis:Suivi[];
  page:number=1;
  totalRecords:string; 

  constructor(private suiviService:SuiviService, private dialog:MatDialog,private confirmation:ConfirmationService) { }

  ngOnInit(): void {
    this.getSuivis();
  }

  private getSuivis(){
    this.suiviService.getSuiviList().subscribe(data=>{
      this.suivis=data;
    })
  }

  onCreate(){
    this.dialog.open(CreateSuiviComponent);
  }

  updateSuivi(suivi:Suivi){
    const dialogConfig=new MatDialogConfig();
    dialogConfig.data={
      id_suivi:suivi.id_suivi,
      montant:suivi.montant,
      compteRendu:suivi.compteRendu,
      offerCommercial:suivi.offerCommercial,
      id_pov:suivi.id_pov,
      libellePov:suivi.libellePov,
      id_perstation:suivi.id_perstation,
      libellePerstation:suivi.libellePerstation,
    };
    this.dialog.open(UpdateSuiviComponent,dialogConfig);
  }

/*  deleteSuivi(id:number){
    this.suiviService.deleteSuivi(id).subscribe(data=>{
      console.log(data);
      this.getSuivis();
    });
  }

*/
deleteSuivi(id:number){

  this.confirmation.openConfirmDialog('Êtes-vous sûr de supprimer cet Enregistrement ?').afterClosed().subscribe(res=>{
    if(res){
      this.suiviService.deleteSuivi(id).subscribe(data=>{
        console.log(data);
        this.getSuivis();
      });
    }
  })

}

// oreder by
key:string='compteRendu';
reverse:boolean=false;
sort(key){
  this.key=key;
  this.reverse = !this.reverse;
}

// recherche
compteRendu:any;
Search(){
  if(this.compteRendu == ""){
    this.ngOnInit();
  }else{
    this.suivis=this.suivis.filter(res=>{
      return res.compteRendu.toLocaleLowerCase().match(this.compteRendu.toLocaleLowerCase())
    })
  }
}


}
