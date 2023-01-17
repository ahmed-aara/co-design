import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './page/about/about.component';
import { ContactComponent } from './page/contact/contact.component';
import { LandingPageComponent } from './page/landing-page/landing-page.component';
import { OurServiceComponent } from './page/our-service/our-service.component';
import { OurWorkComponent } from './page/our-work/our-work.component';
import { TestComponent } from './page/test/test.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'work', component: OurWorkComponent },
  { path: 'service', component: OurServiceComponent },
  { path: 'test', component: TestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
