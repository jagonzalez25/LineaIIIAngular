import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Vehiculo } from 'src/app/_model/Vehiculo';

@Component({
  selector: 'app-asociar',
  templateUrl: './asociar.component.html',
  styleUrls: ['./asociar.component.css']
})
export class AsociarComponent implements OnInit {

  public nombreConductor: string;

  constructor(public dialogRef: MatDialogRef<AsociarComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Vehiculo) { }

  ngOnInit(): void {
    console.log(this.data);
  }

  onNoClick(): void {
    // this.dialogRef.close({event: 'Cancel'});
    //// this.dialogRef.close({event: 'Add', data: this.info});
    this.dialogRef.close();
  }

}
