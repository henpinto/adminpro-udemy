import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html'
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress:ElementRef;

  @Input('name') leyenda:string = 'Legend';
  @Input() porcentage: number = 50;

  @Output('updateValue') changeValue:EventEmitter<number> =new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  cambiarValor( valor:number ){

    if(this.porcentage >= 100 && valor > 0){
      this.porcentage = 100;
      return;
    }

    if(this.porcentage <= 0 && valor < 0){
      this.porcentage = 0;
      return;
    }

    this.porcentage += valor;

    this.changeValue.emit(this.porcentage);

  }

  onChanges(newValue:number){

   // let elemHTML:any = document.getElementsByName('porcentage')[0];

   // console.log(this.txtProgress);

    if (newValue >= 100) {
      this.porcentage = 100;
    }else if(newValue <= 0){
        this.porcentage = 0;
    }else{
      this.porcentage = newValue;
    }

    this.txtProgress.nativeElement.value = this.porcentage;

    this.changeValue.emit(this.porcentage);

    this.txtProgress.nativeElement.focus();

  }

}
