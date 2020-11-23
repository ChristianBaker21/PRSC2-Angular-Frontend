import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu: string [] = [
    "PRSC2"
  ];

  
  constructor() { }

  ngOnInit(): void {
  }

}
