import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
        path: 'discord',
        loadChildren: () => import('./discord-bot/discord-bot.module').then(m => m.DiscordBotModule)
    },
    {
        path: 'plugin',
        loadChildren: () => import('./plugin/plugin.module').then(m => m.PluginModule)
    },
    {
        path: 'web',
        loadChildren: () => import('./web-interface/web-interface.module').then(m => m.WebInterfaceModule)
    },
    {
        path: 'public-api',
        loadChildren: () => import('./public-api/public-api.module').then(m => m.PublicApiModule)
    },
    {
        path: 'faq',
        loadChildren: () => import('./faq/faq.module').then(m => m.FAQModule)
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        useHash: true
    })],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
