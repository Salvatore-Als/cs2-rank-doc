import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscordBotComponent } from './discord-bot.component';
import { DiscordBotRoutingModule } from './discord-bot.routing.module';
import { InstallationComponent } from './installation/installation.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { SharedModule } from '../components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    DiscordBotRoutingModule,
    SharedModule
  ],
  declarations: [
    DiscordBotComponent,
    InstallationComponent,
    ConfigurationComponent
  ]
})
export class DiscordBotModule { }
