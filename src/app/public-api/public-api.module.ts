import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicApiComponent } from './public-api.component';
import { PublicApiModuleRoutingModule } from './public-api.routing.module';
import { ConfigurationComponent } from './configuration/configuration.component';
import { InstallationComponent } from './installation/installation.component';
import { SharedModule } from '../components/shared.module';
import { RoutesComponent } from './routes/routes.component';
import { RouteComponent } from './routes/route/route.component';

@NgModule({
  imports: [
    CommonModule,
    PublicApiModuleRoutingModule,
    SharedModule
  ],
  declarations: [
    PublicApiComponent,
    ConfigurationComponent,
    InstallationComponent,
    RoutesComponent,
    RouteComponent
  ]
})
export class PublicApiModule { }
