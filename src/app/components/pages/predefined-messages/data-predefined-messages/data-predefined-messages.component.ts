import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'SMS HEY!', weight: 1.0079, symbol: 'Estimado usuario recibimos su mensaje nos puede contactar por whatsapp.'},
  {position: 2, name: 'alta tsf', weight: 4.0026, symbol: 'Te informamos que el servicio telcel sin fronteras a sido activado exitosamente.'},
  {position: 3, name: 'baja tsf', weight: 6.941, symbol: 'Te informamos que el servicio telcel sin fronteras a sido cancelado exitosamente.'},
  {position: 4, name: 'PRODUCTIVIDAD CARSO', weight: 9.0122, symbol: 'Carso 14'},
  {position: 5, name: 'CB ANEXAVI', weight: 10.811, symbol: 'Estimado usuario identificamos que ha llamado a viajero internacional'},
  {position: 6, name: 'FALLA DE ACTIVACIÓN TSF', weight: 12.0107, symbol: 'Te informamos que el servicio telcel sin fronteras no se ha podido activar'},
  {position: 7, name: 'BUZON PRONDE', weight: 14.0067, symbol: 'Estimado usuario identificamos su numero en nuestro registro'},
  {position: 8, name: 'QUERY DESBORDE', weight: 15.9994, symbol: 'Estimado usuario identificamos que ha llamado a viajero internacional'},
  {position: 9, name: 'AMBIENTAL', weight: 18.9984, symbol: 'Estimado usuario identificamos que ha llamado a viajero internacional'},
  {position: 10, name: 'BUZONES ANEXA ', weight: 20.1797, symbol: 'Estimado usuario identificamos que ha llamado a viajero internacional'},
  {position: 11, name: 'SMS DATOS PRONDE', weight: 22.9897, symbol: 'Estimado usuario en atención a buzón'},
  {position: 12, name: 'falla general de datos', weight: 24.305, symbol: 'Por favor reiniciar equipo.'},
 
];

@Component({
  selector: 'app-data-predefined-messages',
  templateUrl: './data-predefined-messages.component.html',
  styleUrls: ['./data-predefined-messages.component.scss']
})
export class DataPredefinedMessagesComponent implements OnInit {

  displayedColumns: string[] = ['name', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor() { }

  ngOnInit()  {
    this.dataSource.paginator = this.paginator;
  }

}
