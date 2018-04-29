
import { RouterModule } from '@angular/router';
import { Routes} from '@angular/router';
import { IndexComponent } from './index/index.component';
import { RentComponent } from './rent/rent.component';
import { EfectComponent } from './efect/efect.component';
import { DecorComponent } from './decor/decor.component';
import { VideoComponent } from './video/video.component';
import { RentMainComponent } from './rent-main/rent-main.component';
import { ContactComponent } from './contact/contact.component';
import {CreateComponent} from "./create/create.component";
export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  { path: 'index',
    component: IndexComponent
  },
  { path: 'rent',
    component: RentComponent
  },
  { path: 'efect',
    component: EfectComponent
  },
  { path: 'decor',
    component: DecorComponent
  },
  { path: 'video',
    component: VideoComponent
  },
  { path: 'rent-main',
    component: RentMainComponent
  },
  { path: 'contact',
    component: ContactComponent
  },
  { path: 'create',
    component: CreateComponent
  }
];
export const AppComponents: any = [
  IndexComponent,
  RentComponent,
  EfectComponent,
  DecorComponent,
  CreateComponent,
  VideoComponent,
  RentMainComponent,
  ContactComponent
];
