import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShipmentComponent} from './shipment.component';
import {ShipmentCardModule} from './card/shipment-card.module';
import {OnHoverModule} from '../../shared/directivas/on-hover/on-hover.module';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {NavModule} from './nav/nav.module';
import { AddComponent } from './add/add.component';
import {ModifyComponent} from './modify/modify.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatOptionModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [ShipmentComponent, AddComponent, ModifyComponent],
  imports: [
    CommonModule, ShipmentCardModule, OnHoverModule, MatButtonModule, MatIconModule,
    MatDialogModule, NavModule, MatButtonModule, MatIconModule,
    MatDialogModule, FormsModule, MatOptionModule, MatFormFieldModule, MatInputModule, MatCardModule, ReactiveFormsModule
  ],
  exports: [
    ShipmentComponent
  ]
})
export class ShipmentModule { }
