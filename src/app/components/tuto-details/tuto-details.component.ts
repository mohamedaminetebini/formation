import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { TutoServiceService } from 'src/app/services/tuto-service.service';
import { Tuto } from 'src/app/types/type';

@Component({
  selector: 'app-tuto-details',
  templateUrl: './tuto-details.component.html',
  styleUrls: ['./tuto-details.component.css']
})
export class TutoDetailsComponent implements OnInit {
@Input() tuto! : Tuto
editMode : boolean = false
  constructor(
    private tutoService: TutoServiceService ,
    private route : ActivatedRoute,
    private router : Router,
    private messageService: MessageService

  ) { }

  updateTuto(){
    const token = window.sessionStorage.getItem("token") || "";
   this.tutoService.updateTuto(this.tuto.id!, this.tuto,token).subscribe(
     {
       next : () => {
          this.messageService.add({severity:'success', summary: 'Success', detail: 'Tuto Updated Successfully'});
           setTimeout(() => {
            this.router.navigate(["list"]);
           }, 1500);

       },
       error : () => {
         this.messageService.add({severity:'error', summary: 'Error', detail: 'Error while updating Tuto'});
       }
     }

   );
  }
 ngOnInit(): void {
  const token = window.sessionStorage.getItem("token") || "";
  const id = this.route.snapshot.paramMap.get('id');
  if(id){
    this.editMode = true
    this.tutoService.getTutoById(id,token).subscribe(tuto => {
      this.tuto = tuto
    })
  }
 }
}
