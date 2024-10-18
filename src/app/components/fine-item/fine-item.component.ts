import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TrafficFine } from '../../models/traffic-fine';

@Component({
  selector: 'app-fine-item',
  standalone: true,
  imports: [],
  templateUrl: './fine-item.component.html',
  styleUrl: './fine-item.component.css'
})
export class FineItemComponent {

  @Input() fineItem!:TrafficFine;
  @Output() fineDelete:EventEmitter<TrafficFine>=new EventEmitter();
  
  onclick(fineItem:TrafficFine){
    this.fineDelete.emit(fineItem);
    console.log("onclick has been triggered")
  }
  }
