import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from './badge/badge.component';
import { ConfigFileComponent } from './config-file/config-file.component';
import { AlertComponent } from './alert/alert.component';
import { HttpClientModule } from '@angular/common/http';
import { CommandsComponent } from './commands/commands.component';
import { TablePlaceholderComponent } from './table-placeholder/table-placeholder.component';

const SHARED_COMPONENTS = [
  BadgeComponent,
  ConfigFileComponent,
  AlertComponent,
  CommandsComponent,
  TablePlaceholderComponent
]

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    ...SHARED_COMPONENTS
  ],
  exports: [
    ...SHARED_COMPONENTS
  ]
})
export class SharedModule { }
