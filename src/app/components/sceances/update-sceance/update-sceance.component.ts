import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Pov } from 'src/app/models/pov';
import { Sceance } from 'src/app/models/sceance';
import { PovService } from 'src/app/services/pov.service';
import { SceanceService } from 'src/app/services/sceance.service';

@Component({
  selector: 'app-update-sceance',
  templateUrl: './update-sceance.component.html',
  styleUrls: ['./update-sceance.component.css']
})
export class UpdateSceanceComponent implements OnInit {
  id:number;
  sceance:Sceance;

  povs:Pov[];

  constructor( private sceanceService:SceanceService,
                private povService:PovService,
                private router:Router,
                protected ref:MatDialogRef<UpdateSceanceComponent>,
                @Inject(MAT_DIALOG_DATA)data
               ) { 
                this.sceance=data;
               }

  ngOnInit(): void {
    this.getPovs();
  }

  private getPovs(){
    this.povService.getPovList().subscribe(data=>{
      this.povs=data;
    })

  }


  onSubmit(){
    this.sceanceService.updateSceance(this.id,this.sceance).subscribe(data=>{
      this.goToSceanceList();
      let currentUrl=this.router.url;
      this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
        this.router.navigate([currentUrl]);
      });
    },
   error=>console.log(error) 
    );
    this.ref.close();
  }

    goToSceanceList(){
      this.router.navigate(['/sceances']);
    }

}
