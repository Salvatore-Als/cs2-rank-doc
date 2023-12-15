import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FAQComponent } from './faq.component';
import { FAQModuleRoutingModule } from './faq.routing.module';
import { SharedModule } from '../components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FAQModuleRoutingModule,
    SharedModule
  ],
  declarations: [
    FAQComponent
  ]
})
export class FAQModule { }
