import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  backpacks = [
    {
      id: 1,
      name: "Osprey Exped Lightning 45",
      label: "Men's backpack",
      price: 120,
      img: "assets/img/Exped_Lightning_45_black_16-200x200.jpg",
      inCart: false,
    },
    {
      id: 2,
      name: "Osprey Exped Thunder 50",
      label: "Mountain's backpack",
      price: 240,
      img: "assets/img/Exped_Thunder_50_deepseablue_16-200x200.jpg",
      inCart: false,
    },
    {
      id: 3,
      name: "Osprey Himil 60",
      label: "Mountain's backpack",
      price: 380,
      img: "assets/img/FN_HIMIL_60-10_spring_16-200x200.jpg",
      inCart: false,
    },
    {
      id: 4,
      name: "Osprey Aether AG 70",
      label: "Mountain's backpack",
      price: 500,
      img:
        "assets/img/osprey_Aether_AG_70_S17_Side_Adirondack_Green_17-200x200.jpg",
        inCart: false,
    },
    {
      id: 5,
      name: "Osprey HikeLite S18 AG",
      label: "Woman's backpack",
      price: 330,
      img: "assets/img/osprey_HIkelite18_S18_Side_AloeGreen_18-200x200.jpg",
      inCart: false,
    },
    {
      id: 6,
      name: "Osprey HikeLite S18 BB",
      label: "Woman's backpack",
      price: 350,
      img: "assets/img/osprey_HIkelite26_S18_Side_BaccaBlue_18-200x200.jpg",
      inCart: false,
    },
    {
      id: 7,
      name: "Osprey Compite G35",
      label: "Traveller's backpack",
      price: 500,
      img: "assets/img/Osprey_img1.jpg",
      inCart: false,
    },
    {
      id: 8,
      name: "Osprey Renn Side C45",
      label: "Traveller's backpack",
      price: 400,
      img: "assets/img/Osprey_Renn_Side_Aurora_Purple_web_19-200x200.jpg",
      inCart: false,
    },

    {
      id: 9,
      name: "Osprey Atmos AG65",
      label: "Mountain's backpack",
      price: 500,
      img:
        "assets/img/osprey_Atmos_AG_65_S18_Side_Abyss_Grey_web_18-200x200.jpg",
        inCart: false,
    },
    {
      id: 10,
      name: "Osprey Sirrus 50 S17",
      label: "Mountain's backpack",
      price: 500,
      img:
        "assets/img/osprey_Sirrus_50_S17_Side_Black_17-200x200.jpg",
        inCart: false,
    },

    {
      id: 11,
      name: "Osprey Stratos 34 S17",
      label: "City's backpack",
      price: 340,
      img:
        "assets/img/osprey_Stratos_34_S17_Side_Eclipse_Blue_17-200x200.jpg",
        inCart: false,
    },
    {
      id: 12,
      name: "Osprey Denali TE17",
      label: "Mountain's backpack",
      price: 250,
      img:
        "assets/img/TE_denali_black_red_17-200x200.jpg",
        inCart: false,
    }
  ];

  backpacksInCart() {
    return this.backpacks.filter(t => t.inCart);
  }

  getTotalCartCost() {
    return this.backpacksInCart().map(t => t.price).reduce((acc, value) => acc + value, 0);
  }
}
