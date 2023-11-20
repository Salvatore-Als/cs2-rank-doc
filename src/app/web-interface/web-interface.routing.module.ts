import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebInterfaceComponent } from './web-interface.component';

const routes: Routes = [
    {
        path: '',
        component: WebInterfaceComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WebInterfaceRoutingModule { }
