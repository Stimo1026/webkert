import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Shipment} from '../../../shared/models/shipment.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Input() shipment?: Shipment;
  @Input() selectedPage?: string;
  @Output() callSelectPage = new EventEmitter<string>();
  @Output() callSelectC = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  select(target: string): void{
    this.callSelectC.emit(target);
  }

}
