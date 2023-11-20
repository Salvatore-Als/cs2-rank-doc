import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscordBotComponent } from './discord-bot.component';

const routes: Routes = [
    {
        path: '',
        component: DiscordBotComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DiscordBotRoutingModule { }
