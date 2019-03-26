import {NgModule} from "@angular/core";

// COMPONENTES
import {PagesComponent} from "./pages.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ProgressComponent} from "./progress/progress.component";
import {Graficas1Component} from "./graficas1/graficas1.component";

// MODULOS
import {SharedModule} from "../shared/shared.module";

// RUTAS
import {PAGES_ROUTES} from "./pages.route";


@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent
  ],
  exports:[
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES
  ]
})
export class PagesModule {}
