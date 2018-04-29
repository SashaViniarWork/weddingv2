
import { RouterModule } from '@angular/router';
import {CreateComponent} from './component/create/create.component';
import { IndexComponent} from './component/index/index.component';
import { Routes} from '@angular/router';
export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  { path: 'create',
    component: CreateComponent
  },
  { path: 'index',
    component: IndexComponent
  }
];
