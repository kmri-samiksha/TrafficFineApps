import { Component, EventEmitter, Input, Output,OnChanges } from '@angular/core';
import { TrafficFine } from '../../models/traffic-fine';
import { FormsModule} from '@angular/forms';
import { TrafficFineService } from '../../services/traffic-fine.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { StatusComponent } from '../status/status.component';
import { CommonModule } from '@angular/common'; 


@Component({
  selector: 'app-fine-create',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatFormFieldModule,DropdownComponent,CommonModule,StatusComponent],
  providers:[TrafficFineService],
  templateUrl: './fine-create.component.html',
  styleUrl: './fine-create.component.css'
})
export class FineCreateComponent implements OnChanges {
 
  constructor(private apiService: TrafficFineService) {
 
  }
  
  formData = {id: '', driverName: '', driverLicenseNo: '', fineType: '', status: '' };

@Input() itemt: any;
@Output() submitEvent: EventEmitter<TrafficFine>=new EventEmitter();


options: string[] = ['Parking Violations', 'Seat Belt Violations', 'License Violations', 'Traffic Signal Violations'];
statusoptions: string[] = ['Open', 'Closed', 'Pending'];
  selectedOptionType: any;
  selectedstatusOptionType:any;
  onOptionSelected(option: string) {
    this.selectedOptionType = option;
    console.log('Selected option for Fine Type:', this.selectedOptionType);
  }
  onstatusOptionSelected(statusoptions: string) {
    this.selectedstatusOptionType = statusoptions;
    console.log('Selected option for Status:', this.selectedstatusOptionType);
  }



ngOnChanges() {
  console.log("Fine Create ngOnChanges Called:",this.itemt);
  if (this.itemt) {
    console.log("Fine Create ngOnChanges Called:Edit");
    this.formData = this.itemt; 
    this.selectedOptionType=this.formData.fineType;
    this.selectedstatusOptionType=this.formData.status;
  } else {
    console.log("Fine Create ngOnChanges Called:Add");
    this.formData = {id: '', driverName: '', driverLicenseNo: '', fineType: '', status: '' }; 
  }
}

  onSubmit(){
    console.log("Update/Add clicked id:", this.formData.driverName);
    if (this.itemt) {
      this.itemt.fineType=this.selectedOptionType;
      this.itemt.status=this.selectedstatusOptionType;
      this.apiService.updateFine(this.itemt).subscribe({
        next: (response) => {
          console.log('Update record:', response);
          this.itemt='';
          this.formData = this.itemt; 
        }
      
        });
    }
    else if ((this.itemt === undefined || this.itemt == '') && (this.formData.driverName == '' || this.formData.driverName == undefined)) {
      console.log('undefined',this.formData);
    }
    else{
      const fineItem:TrafficFine={
        id:'123e4567-e89b-12d3-a456-426614174000',
        driverName:this.formData.driverName,
        driverLicenseNo:this.formData.driverLicenseNo,
        fineType:this.selectedOptionType,
        
        status:this.selectedstatusOptionType,
        createdDate:new Date()   
      }

      this.apiService.createFine(fineItem).subscribe({
        next: (response) => {
          console.log('Add Record:', response);
          this.submitEvent.emit(response);    
          this.formData = {id: '', driverName: '', driverLicenseNo: '', fineType: '', status: '' }; 
        }
      
        });
    }

   
}

}


