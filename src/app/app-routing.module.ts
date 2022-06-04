import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Component1Component} from "./components/component1/component1.component";
import {Component2Component} from "./components/component2/component2.component";
import {Component3plusComponent} from "./components/component3plus/component3plus.component";

const routes: Routes = [

    {
        path     : 'comp1',
        component: Component1Component
    },

    {
        path     : 'comp2',
        component: Component2Component
    },

    {
        path     : 'comp3plus',
        component: Component3plusComponent
    }


];

@NgModule({
              imports: [RouterModule.forRoot(routes)],
              exports: [RouterModule]
          })
export class AppRoutingModule {
}
