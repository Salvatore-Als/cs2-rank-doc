import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicApiComponent } from './public-api.component';

const routes: Routes = [
    {
        path: '',
        component: PublicApiComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PublicApiModuleRoutingModule { }
