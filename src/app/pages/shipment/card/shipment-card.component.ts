import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Shipment} from 'src/app/shared/models/shipment.model';
import {FbBaseService} from '../../../service/fb-base.service';

@Component({
  selector: 'app-shipment-card',
  templateUrl: './shipment-card.component.html',
  styleUrls: ['./shipment-card.component.scss']
})
export class ShipmentCardComponent implements OnInit {
  @Input() shipment?: Shipment;
  @Input() selectedPage?: string;
  @Output() callSelectPage = new EventEmitter<string>();
  @Output() callSelectC = new EventEmitter<string>();
  @Output() modify = new EventEmitter<string>();
  constructor(private service: FbBaseService) { }

  ngOnInit(): void {
  }

  select(target: string, id: string): void{
    this.modify.emit(id);
    this.callSelectC.emit(target);
  }

  delete(id: string): void{
    this.service.delete('shipments', id);
  }
}
