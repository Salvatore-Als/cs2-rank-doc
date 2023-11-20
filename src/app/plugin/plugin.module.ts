import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PluginComponent } from './plugin.component';
import { PluginRoutingModule } from './plugin.routing.module';
import { ConfigurationComponent } from './configuration/configuration.component';
import { InstallationComponent } from './installation/installation.component';
import { SharedModule } from '../components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    PluginRoutingModule,
    SharedModule
  ],
  declarations: [
    PluginComponent,
    ConfigurationComponent,
    InstallationComponent
  ]
})
export class PluginModule { }
