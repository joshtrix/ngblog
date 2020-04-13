import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  sidenavWidth = 4;
  ngStyle: string;
  constructor() {

  }

  ngOnInit() {

  }

  increase() {
    this.sidenavWidth = 8;
    console.log('increase sidenav width');
  }
  decrease() {
    this.sidenavWidth = 4;
    console.log('decrease sidenav width');
  }

}
