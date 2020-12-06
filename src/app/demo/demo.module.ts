import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DemoRoutingModule } from './demo-routing.module';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ButtonsComponent } from './buttons/buttons.component';
import { FlexboxComponent } from './flexbox/flexbox.component';


@NgModule({
  declarations: [ButtonsComponent, FlexboxComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    DemoRoutingModule,
  ]
})
export class DemoModule { }
