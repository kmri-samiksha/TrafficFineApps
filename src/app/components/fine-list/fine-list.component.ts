import { Component,Injectable,OnInit,inject,Output,EventEmitter } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';//Sam
import { Observable, of } from 'rxjs';
import { TrafficFineService } from '../../services/traffic-fine.service';
import { TrafficFine } from '../../models/traffic-fine';
import { CommonModule } from '@angular/common';
import { FineCreateComponent } from '../fine-create/fine-create.component';
import { FineItemComponent } from '../fine-item/fine-item.component';

@Component({
  selector: 'app-fine-list',
  standalone: true,
  imports: [CommonModule,FineCreateComponent,FineItemComponent,HttpClientModule],
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
    //this.fetchProduct();
    this.apiService.getFines().subscribe(
      (response:any[]) => {
        this.fines = response;
      }
    );
  }
 
  onsubmitData(fineItem:TrafficFine){
    console.log("Add todo:",fineItem);
    //  const index=this.fines.indexOf(fineItem);
     // this.fines.push(fineItem);


   console.log("Done Done");
    const index = this.fines.findIndex((item:TrafficFine) => item.id === fineItem.id);
    if (index !== -1) {
      this.fines[index] = fineItem;
      this.selectedItem = null;
    }
    this.selectedItem = null;
    this.fines.push(fineItem);
  }

  onclick(fineItem:TrafficFine){
    console.log(fineItem);
    this.selectedItem=fineItem;
    
  }
  }





