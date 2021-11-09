import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Vehiculo } from 'src/app/_model/Vehiculo';
import { BarraDeProgresoService } from 'src/app/_service/barra-de-progreso.service';
import { VehiculoService } from 'src/app/_service/vehiculo.service';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AsociarComponent } from './asociar/asociar.component';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {

  displayedColumns: string[] = ['placa', 'modelo', 'marca', 'tipoVehiuclo', 'capacidad'];
  dataSource = new MatTableDataSource<Vehiculo>();

  @ViewChild("VehiculoPaginator") paginator: MatPaginator;

  pageSize: number = 5;
  pageIndex: number = 0;
  cantidad: number = 0;

  public placa: string;
  public resultadoDialogo: string;

  constructor(private vehiculoService: VehiculoService,
              private snackBar: MatSnackBar,
              private barraDeProgresoService: BarraDeProgresoService,
              public dialog: MatDialog) { }

  ngOnInit(): void {

    this.listar();


    
    /*let vehiculo: Vehiculo = new Vehiculo();
    vehiculo.idVehiculo = 5;
    vehiculo.placa = "akm-147";
    vehiculo.modelo = "2019";
    vehiculo.marca = "Ford";
    vehiculo.tipoVehiuclo = "Carga";
    vehiculo.capacidad = "50Kg"; */

    /*this.vehiculoService.guardar(vehiculo).subscribe(data =>{
        console.log("Se registro vehiculo");

    });*/
     /*this.barraDeProgresoService.progressBarReactiva.next(false);
     this.vehiculoService.editar(vehiculo).subscribe(data =>{
        console.log("Vehiculo editado correctamente");
        this.barraDeProgresoService.progressBarReactiva.next(true);
      });*/


  }


  public cambioPagina(ev: any){
      this.pageSize = ev.pageSize;
      this.pageIndex = ev.pageIndex;
      this.listar();
  }

  private listar(){
        this.vehiculoService.listar(this.pageIndex, this.pageSize).subscribe(data =>{
          this.dataSource = new MatTableDataSource(data.content);
          this.cantidad = data.totalElements;
        });
  }

  private openSnackBar(mensaje: string) {
    this.snackBar.open(mensaje, 'Información', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  openDialog(): void {
    let vehiculo = new Vehiculo();
    vehiculo.placa = this.placa;
    const dialogRef = this.dialog.open(AsociarComponent, {
      width: '300px',
      data: vehiculo,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.resultadoDialogo = result;

    });
  }

}
