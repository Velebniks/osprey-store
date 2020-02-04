import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  dataSource = [
    { id: 1, name: "Ospey TG70", price: 250 },
    { id: 2, name: "Ospey AS18", price: 150 },
    { id: 3, name: "Ospey BD70", price: 350 },
    { id: 4, name: "Ospey FG0", price: 350 },
    { id: 5, name: "Ospey TD0", price: 550 }
  ];

  displayedColumns = ["id", "name", "price","actions"];

  getTotalCost() {
    return this.dataSource.map(t => t.price).reduce((acc, value) => acc + value, 0);
  }

  constructor() {}

  ngOnInit() {}
}
