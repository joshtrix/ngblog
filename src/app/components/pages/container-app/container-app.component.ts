import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-container-app',
  templateUrl: './container-app.component.html',
  styleUrls: ['./container-app.component.scss']
})
export class ContainerAppComponent{

  tiles: Tile[] = [
    {text: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
  ];

}
