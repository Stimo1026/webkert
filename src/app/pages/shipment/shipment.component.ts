import {Component, OnDestroy, OnInit} from '@angular/core';
import {SHIPMENTS} from 'src/app/shared/database/shipment.database';
import {AddComponent} from './add/add.component';
import {MatDialog} from '@angular/material/dialog';
import {FbBaseService} from '../../service/fb-base.service';
import {Shipment} from '../../shared/models/shipment.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.scss']
})
export class ShipmentComponent implements OnInit, OnDestroy {
  shipments: Observable<Shipment[]> | null = null;
  category ? = 'shipment';
  id ? = '';
  constructor(private dialog: MatDialog, private service: FbBaseService) { }

  ngOnInit(): void {
    this.category = 'shipment';
    this.getShipments();
  }

  onSelect(event: string): void{
    if (event){
      this.category = event;
    }
  }

  ngOnDestroy(): void {
    delete this.category;
  }

  getShipments(): void{
    this.shipments = this.service.get('shipments');
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddComponent, {});
    // tslint:disable-next-line: deprecation
    dialogRef.afterClosed().subscribe((result: Shipment) => {
      if (result) {
        this.service.add('shipments', result);
      }
    });
  }
}
