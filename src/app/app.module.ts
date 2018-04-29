import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {AppComponent} from './app.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { appRoutes } from './router.module';
import { RouterModule} from '@angular/router';
import { IndexComponent } from './index/index.component';
import { RentComponent } from './rent/rent.component';
import { EfectComponent } from './efect/efect.component';
import { DecorComponent } from './decor/decor.component';
import { VideoComponent } from './video/video.component';
import { RentMainComponent } from './rent-main/rent-main.component';
import { ContactComponent } from './contact/contact.component';
import { NgxCarouselModule } from 'ngx-carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { CreateComponent } from './create/create.component';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { ImageCropperModule } from 'ngx-image-cropper';
import {MatFormFieldModule} from '@angular/material/form-field';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    RentComponent,
    EfectComponent,
    DecorComponent,
    VideoComponent,
    RentMainComponent,
    ContactComponent,
    CreateComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    BrowserModule,
    MatButtonModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    NgxCarouselModule,
    MatMenuModule,
    RouterModule.forRoot(appRoutes),
    {provide: LocationStrategy, useClass: HashLocationStrategy}
    BrowserAnimationsModule,
    ImageCropperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
