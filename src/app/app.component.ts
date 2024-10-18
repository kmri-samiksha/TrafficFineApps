import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FineListComponent } from '../app/components/fine-list/fine-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FineListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TrafficFineApp';
}
