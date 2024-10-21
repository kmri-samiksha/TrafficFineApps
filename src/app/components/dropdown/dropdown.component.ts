import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  imports: [CommonModule],
  standalone: true,
})
export class DropdownComponent {
  @Input() options: string[] = [];
  @Output() optionSelected = new EventEmitter<string>();

  selectedOptionTypes: string | undefined='Select a FineType';

  onSelect(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedOptionTypes = selectElement.value;
    this.optionSelected.emit(this.selectedOptionTypes);
  }

}