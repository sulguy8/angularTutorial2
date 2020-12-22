import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './comp/main.component';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule
  ]
})
export class MainModule { }
