import { DataService } from './../data.service';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  displayedColumns = ["id", "name", "price","actions"];

  constructor(public data: DataService) {}

  ngOnInit() {}
}
