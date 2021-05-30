import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShipmentCardComponent} from './shipment-card.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [ShipmentCardComponent],
  imports: [
    CommonModule, MatCardModule, MatButtonModule, MatIconModule
  ],
  exports: [ShipmentCardComponent]
})
export class ShipmentCardModule { }
