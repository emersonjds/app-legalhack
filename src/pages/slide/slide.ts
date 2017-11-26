import { HomePage } from "./../home/home";
import { Component, OnInit } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "app-slide",
  templateUrl: "./slide.html"
})
export class SlideComponent {
  constructor(public navCtrl: NavController) {}

  ngOnInit() {
    this.goPage();
  }

  goPage() {
    this.navCtrl.push(HomePage);
  }
}
