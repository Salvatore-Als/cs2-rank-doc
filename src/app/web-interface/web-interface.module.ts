import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebInterfaceComponent } from './web-interface.component';
import { WebInterfaceRoutingModule } from './web-interface.routing.module';
import { ConfigurationComponent } from './configuration/configuration.component';
import { InstallationComponent } from './installation/installation.component';
import { SharedModule } from '../components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    WebInterfaceRoutingModule,
    SharedModule
  ],
  declarations: [
    WebInterfaceComponent,
    ConfigurationComponent,
    InstallationComponent
  ]
})
export class WebInterfaceModule { }
