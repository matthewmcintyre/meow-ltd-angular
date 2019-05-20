import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  menuOpen = false;

  menuClicked() {
    this.menuOpen = !this.menuOpen;
    console.log(this.menuOpen);
  }

  constructor() {}

  ngOnInit() {}
}
