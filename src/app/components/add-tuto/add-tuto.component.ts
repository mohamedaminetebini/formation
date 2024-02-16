import { MessageService } from 'primeng/api';
import { Component } from '@angular/core';
import { TutoServiceService } from 'src/app/services/tuto-service.service';
import { Tuto } from 'src/app/types/type';

@Component({
  selector: 'app-add-tuto',
  templateUrl: './add-tuto.component.html',
  styleUrls: ['./add-tuto.component.css'],

})
export class AddTutoComponent {

  tuto :Tuto = {
    title: '',
    description: '',
    publishedStatus: false
  }

  constructor(
    private tutoService: TutoServiceService,
    private messageService: MessageService
  ) { }
  addTuto(){
    const token = window.sessionStorage.getItem("token")
    if(this.tuto.title !=="" && this.tuto.description !=="" && token){

      this.tutoService.addTuto(this.tuto,token).subscribe({
        next : (tuto) => {

          this.tuto = {
            title: '',
            description: '',
            publishedStatus: false
          }
          this.messageService.add({severity:'success', summary: 'Success', detail: 'Tuto Added Successfully'});
        },
        error : (err) => {
          console.log(err);
          this.messageService.add({severity:'error', summary: 'Error', detail: 'Error while adding Tuto'});
        }
      });
    }


  }

}
