import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule, MatToolbarModule, MatButtonModule, MatMenuModule, MatIconModule
  ],
  exports: [NavComponent],
})
export class NavModule { }
