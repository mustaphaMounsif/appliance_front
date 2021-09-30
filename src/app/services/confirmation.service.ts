import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationTypeComponent } from '../components/types/confirmation-type/confirmation-type.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationService {

  constructor(private dialog:MatDialog) { }

  openConfirmDialog(msg){
  return  this.dialog.open(ConfirmationTypeComponent,{
      width:'390px',
      disableClose:true,
     data:{
       message:msg
     }
    });
  }
 
}
