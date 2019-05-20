import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./home/about/about.component";
import { PricingComponent } from "./pricing/pricing.component";
import { ContactComponent } from "./contact/contact.component";
import { FindJobsComponent } from "./find-jobs/find-jobs.component";
import { LoginComponent } from "./login/login.component";
import { BookDemoComponent } from "./book-demo/book-demo.component";
import { LandingComponent } from "./home/landing/landing.component";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    PricingComponent,
    ContactComponent,
    FindJobsComponent,
    LoginComponent,
    BookDemoComponent,
    LandingComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
