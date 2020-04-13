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
  {position: 1, name: 'Falla General', weight: 1.0079, symbol: 'Envío de SMS por falla general de servicio RI (interno)'},
  {position: 2, name: 'Falla General Corporativo', weight: 4.0026, symbol: 'Envío de SMS por falla general de servicio en RI Corporativo'},
  {position: 3, name: 'Falla General Empresarial', weight: 6.941, symbol: 'Envío de SMS por falla general de servicio en RI Empresarial'},
  {position: 4, name: 'CHARGING MANAGER', weight: 9.0122, symbol: 'ADICIONAR ESTE GRUPO CUDO SE TENGA PROB CON CHARGING MANAGER'},
  {position: 5, name: 'falla internet', weight: 10.811, symbol: 'falla internet'},
  {position: 6, name: 'FALLA DE ACTIVACIÓN TSF', weight: 12.0107, symbol: 'Te informamos que el servicio telcel sin fronteras no se ha podido activar'},
  {position: 7, name: 'BUZON PRONDE', weight: 14.0067, symbol: 'Estimado usuario identificamos su numero en nuestro registro'},
  {position: 8, name: 'QUERY DESBORDE', weight: 15.9994, symbol: 'Estimado usuario identificamos que ha llamado a viajero internacional'},
  {position: 9, name: 'AMBIENTAL', weight: 18.9984, symbol: 'Estimado usuario identificamos que ha llamado a viajero internacional'},
  {position: 10, name: 'BUZONES ANEXA ', weight: 20.1797, symbol: 'Estimado usuario identificamos que ha llamado a viajero internacional'},
  {position: 11, name: 'SMS DATOS PRONDE', weight: 22.9897, symbol: 'Estimado usuario en atención a buzón'},
  {position: 12, name: 'falla general de datos', weight: 24.305, symbol: 'Por favor reiniciar equipo.'},
 
];

@Component({
  selector: 'app-data-groups',
  templateUrl: './data-groups.component.html',
  styleUrls: ['./data-groups.component.scss']
})
export class DataGroupsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor() { }

  ngOnInit()  {
    this.dataSource.paginator = this.paginator;
  }

}
