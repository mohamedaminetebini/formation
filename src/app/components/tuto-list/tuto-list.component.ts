import {Component, OnInit} from '@angular/core';
import {TutoServiceService} from "../../services/tuto-service.service";
import {map, Observable} from "rxjs";
import {Tuto} from "../../types/type";
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-tuto-list',
  templateUrl: './tuto-list.component.html',
  styleUrls: ['./tuto-list.component.css'],
  providers: [MessageService]
})
export class TutoListComponent implements OnInit {
  searchText: string = "";
  tutos$ : Observable<Tuto[]> = new Observable<Tuto[]>();
  currentTuto: Tuto | undefined
  constructor(private tutoService: TutoServiceService, private messageService: MessageService) {
    this.tutos$ = new Observable<Tuto[]>();
  }
  ngOnInit() {
    const token = window.sessionStorage.getItem("token")
    if(token){
      this.tutos$ = this.tutoService.getAllTutos(token);
    }
  }
setTuto(tuto: Tuto, i: number){
  this.currentTuto = tuto

}
  searchByTitle(event: any) {
    if (event.key === 'Enter') {
      const token = window.sessionStorage.getItem("token")
     if(token){
       this.tutos$ = this.tutoService.getAllTutos(token,this.searchText);
     }

    }
  }
  deleteTutos(){
    console.log("delete tutos")
    const token = window.sessionStorage.getItem("token")
    if(token){
      this.tutoService.deleteAllTutos(token).subscribe({
        next : (tutos) => {
          this.messageService.add({severity:'success', summary: 'Success', detail: 'Tutos Deleted Successfully'});
          this.tutos$ = new Observable<Tuto[]>();
          this.currentTuto = undefined
        },
        error : (err) => {
          console.log(err);
          this.messageService.add({severity:'error', summary: 'Error', detail: 'Error while deleting Tutos'});
        }
      });
    }
  }
}
