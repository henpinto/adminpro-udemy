import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  porcentage1: number = 20;
  porcentage2: number = 30;

  constructor() { }

  ngOnInit() {
  }

  actualizar(event:number){
    console.log('Event: ', event);
  }
}
