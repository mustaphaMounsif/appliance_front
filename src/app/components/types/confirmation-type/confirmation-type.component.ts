import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-type',
  templateUrl: './confirmation-type.component.html',
  styleUrls: ['./confirmation-type.component.css']
})
export class ConfirmationTypeComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data,
            public dialogRef:MatDialogRef<ConfirmationTypeComponent>
  ) { }

  ngOnInit(): void {
  }

  closeDialog(){
this.dialogRef.close(false);
  }


}
