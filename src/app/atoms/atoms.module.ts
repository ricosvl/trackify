import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon/icon.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    IconComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    IconComponent
  ]
})
export class AtomsModule { }
