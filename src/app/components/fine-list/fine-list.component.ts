import { Component,Injectable,OnInit,inject,Output,EventEmitter } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';//Sam
import { Observable, of } from 'rxjs';
import { TrafficFineService } from '../../services/traffic-fine.service';
import { TrafficFine } from '../../models/traffic-fine';
import { CommonModule } from '@angular/common';
import { FineCreateComponent } from '../fine-create/fine-create.component';


@Component({
  selector: 'app-fine-list',
  standalone: true,
  imports: [CommonModule,FineCreateComponent,HttpClientModule],
  providers:[TrafficFineService],
  templateUrl: './fine-list.component.html',
  styleUrl: './fine-list.component.css'
})

//TrafficFine


export class FineListComponent implements OnInit {
  @Output() editClickEvent: EventEmitter<TrafficFine>=new EventEmitter();
  //constructor(private apiService: TrafficFineService) { }
  httpClient=inject(HttpClient);
  fines:any=[];
  selectedItem: any;
  
  constructor(private apiService: TrafficFineService){
    
  }
  ngOnInit(): void {
    console.log("Fine List ngOnInit Called:");
    this.apiService.getFines().subscribe(
      (response:any[]) => {
        this.fines = response;
      }
    );
  }
 
  onsubmitData(fineItem:TrafficFine){
    console.log("Listen to Add/Edit:",fineItem.id);
    //  const index=this.fines.indexOf(fineItem);
     // this.fines.push(fineItem);


   //console.log("Done Done");
    //const index = this.fines.findIndex((item:TrafficFine) => item.id === fineItem.id);
    //if (index !== -1) {
     // this.fines[index] = fineItem;
      //this.selectedItem = null;
    //}
    this.selectedItem = null;
    this.fines.push(fineItem);
  }

  onclick(fineItem:TrafficFine){
    console.log('Edit Click:',fineItem);
    this.selectedItem=fineItem;
    
  }
  onDeleteClick(fineItem:TrafficFine){
    console.log('Delete:', fineItem);
    
    this.apiService.deleteFine(fineItem.id).subscribe(
      () => {
        console.log('Fine deleted successfully:');
        this.fines = this.fines.filter((fine:TrafficFine) => fine.id !== fineItem.id);
        //this.submitEvent.emit(this.item);
      }
    
      );
  }
  }





