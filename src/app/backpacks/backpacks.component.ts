import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-backpacks",
  templateUrl: "./backpacks.component.html",
  styleUrls: ["./backpacks.component.css"]
})
export class BackpacksComponent implements OnInit {
  backpacks = [
    {
      id: 1,
      name: "Ospey1",
      label: "Men's backpack",
      price: 120,
      img: "assets/img/TE_denali_black_red_17-200x200.jpg"
    },
    {
      id: 2,
      name: "Ospey2",
      label: "Men's backpack",
      price: 140,
      img: "assets/img/TE_denali_black_red_17-200x200.jpg"
    },
    {
      id: 3,
      name: "Ospey3",
      label: "Men's backpack",
      price: 620,
      img: "assets/img/TE_denali_black_red_17-200x200.jpg"
    },
    {
      id: 4,
      name: "Ospey4",
      label: "Men's backpack",
      price: 420,
      img: "assets/img/TE_denali_black_red_17-200x200.jpg"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
