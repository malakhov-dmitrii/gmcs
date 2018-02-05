import { NgModel } from "@angular/forms";
import { NgModule } from "@angular/core";
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {SystemModule} from "./system/system.module";

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'system', loadChildren: './system/system.module#SystemModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})

export class AppRoutingModule{

}
