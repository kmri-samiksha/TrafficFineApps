import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-status',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './status.component.html',
  styleUrl: './status.component.css'
})
export class StatusComponent {
  @Input() statusoptions: string[] = [];
  @Output() statusOptionSelected = new EventEmitter<string>();
  

  selectedStatusOptionTypes: string | undefined='Select Status';

  onSelect(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedStatusOptionTypes = selectElement.value;
    this.statusOptionSelected.emit(this.selectedStatusOptionTypes);
  }
}
