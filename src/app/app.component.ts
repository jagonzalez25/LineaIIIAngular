import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;  

  public title: string = 'Primer programa Angular';
  numero1: number;
  numero2: number;
  resultado: number;

  //var let const
  public operar(op: string): void{
     switch(op){
           case 's':
             this.resultado = this.numero1 + this.numero2;
             break;
           case 'r':
              this.resultado = this.numero1 - this.numero2;   
              break; 
           case 'm':
              this.resultado = this.numero1 * this.numero2;
              break;
           case 'd':
              this.resultado = this.numero1 / this.numero2;    
              break;   
            default:
              this.resultado = 0;                 
      }
  }

  public teclear(e: any): void{
     //console.log(e);
     console.log("La tecla que se oprimio fue: " + e.key);
     console.log("La palabra al momento es: " + e.target.value);
  }

}
