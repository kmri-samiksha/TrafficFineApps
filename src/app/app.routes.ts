import { Routes } from '@angular/router';
import { FineCreateComponent } from '../app/components/fine-create/fine-create.component';
import { FineListComponent } from '../app/components/fine-list/fine-list.component';

export const routes: Routes = [
    { path: '', redirectTo: 'fine-list', pathMatch: 'full' },
    { path: 'fine-list', component:FineListComponent },
    { path: 'fine-create', component: FineCreateComponent }
  ];
