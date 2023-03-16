

import { Component } from "@angular/core";


@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})


export class MainComponent {


  pseudo_random_bgc(): void {
    try {
      let _r_: string = String(Math.floor(Math.random() * Number(244)));
      let _g_: string = String(Math.floor(Math.random() * Number(244)));
      let _b_: string = String(Math.floor(Math.random() * Number(244)));
      document.body.style.backgroundColor = `rgb(${_r_},${_g_},${_b_})`;
    } catch (err) {
      if (err) {
        console.clear();
        console.log(err);
      };
    };
  };


};