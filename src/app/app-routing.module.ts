import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { PricingComponent } from "./pricing/pricing.component";
import { FindJobsComponent } from "./find-jobs/find-jobs.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "contact", component: ContactComponent },
  { path: "pricing", component: PricingComponent },
  { path: "find-jobs", component: FindJobsComponent },
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
