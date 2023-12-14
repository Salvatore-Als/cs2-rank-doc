import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicApiModuleComponent } from './public-api.component';

const routes: Routes = [
    {
        path: '',
        component: PublicApiModuleComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PublicApiModuleRoutingModule { }
