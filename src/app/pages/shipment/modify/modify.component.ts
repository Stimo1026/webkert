import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Shipment} from '../../../shared/models/shipment.model';
import {FbBaseService} from '../../../service/fb-base.service';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.scss']
})
export class ModifyComponent implements OnInit {
  shipmentList: Shipment[] | null = null;
  shipment: Shipment | undefined;
  @Input() id?: string;
  @Input() selectedPage?: string;
  @Output() callSelectPage = new EventEmitter<string>();
  @Output() callSelectC = new EventEmitter<string>();
  constructor(private service: FbBaseService) {
    if (this.shipment === undefined){
    this.shipment = {
      id:  '',
      carrier: '',
      estimatedDeliveryDate: '',
      status: '',
      itemName: '',
      weight: 0
    };
  } }

  ngOnInit(): void {
    if (!this.id){
      this.id = '';
    }
    this.service.get1('shipments', this.id).subscribe(i => {
      this.shipmentList = i;
      this.shipment = this.shipmentList[0];
    });
  }

  select(target: string): void{
    this.callSelectC.emit(target);
  }
  update(shipment: Shipment, id: string): void{
    this.service.add('shipments', shipment, id);
    this.select('shipment');
  }

}
