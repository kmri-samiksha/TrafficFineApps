import { Component, EventEmitter, Input, Output,OnChanges } from '@angular/core';
import { TrafficFine } from '../../models/traffic-fine';
import { FormsModule } from '@angular/forms';
import { TrafficFineService } from '../../services/traffic-fine.service';

@Component({
  selector: 'app-fine-create',
  standalone: true,
  imports: [FormsModule],
  providers:[TrafficFineService],
  templateUrl: './fine-create.component.html',
  styleUrl: './fine-create.component.css'
})
export class FineCreateComponent implements OnChanges {
  constructor(private apiService: TrafficFineService) {}

  formData = {id: '', driverName: '', driverLicenseNo: '', fineType: '', status: '' };

@Input() item: any;
@Output() submitEvent: EventEmitter<TrafficFine>=new EventEmitter();

ngOnChanges() {
  console.log('On change:', this.item);
  if (this.item) {
    console.log('On change if');
    this.formData = this.item; // Populate form with selected item data
  } else {
    console.log('On change else');
    this.formData = {id: '', driverName: '', driverLicenseNo: '', fineType: '', status: '' }; // Reset form if no item
  }
}

  onSubmit(){
    console.log("Submit id:", this.item);
    if (this.item) {
      this.apiService.updateFine(this.item).subscribe({
        next: (response) => {
          console.log('Fine added successfully:', response);
          
          this.submitEvent.emit(this.item);
        }
      
        });
    }
    else{
      const fineItem:TrafficFine={
        id:'123e4567-e89b-12d3-a456-426614174000',
        driverName:this.formData.driverName,
        driverLicenseNo:this.formData.driverLicenseNo,
        fineType:this.formData.fineType,
        status:this.formData.status,
        createdDate:new Date()   
      }

      this.apiService.createFine(fineItem).subscribe({
        next: (response) => {
          console.log('Fine added successfully:', response);
          this.submitEvent.emit(fineItem);
        }
      
        });
    }


}
}



