import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleMapsModule } from '@angular/google-maps'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './page/about/about.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { LandingPageComponent } from './page/landing-page/landing-page.component';
import { FooterComponent } from './component/footer/footer.component';
import { IncludePipe } from './pipe/include.pipe';
import { ContactComponent } from './page/contact/contact.component';
import { OurServiceComponent } from './page/our-service/our-service.component';
import { OurWorkComponent } from './page/our-work/our-work.component';
import { TestComponent } from './page/test/test.component';
import { FilterWorkPipe } from './pipe/filter-work.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavBarComponent,
    LandingPageComponent,
    FooterComponent,
    IncludePipe,
    ContactComponent,
    OurServiceComponent,
    OurWorkComponent,
    TestComponent,
    FilterWorkPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgSelectModule,
    BrowserAnimationsModule,
    FormsModule,
    GoogleMapsModule
  ],
  providers: [
    // { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
