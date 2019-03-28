import {NgModule} from "@angular/core";

// GRAFICOS
import { ChartsModule } from 'ng2-charts';

// COMPONENTES
import {PagesComponent} from "./pages.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ProgressComponent} from "./progress/progress.component";
import {Graficas1Component} from "./graficas1/graficas1.component";
import {IncrementadorComponent} from "../components/incrementador/incrementador.component";

// MODULOS
import {SharedModule} from "../shared/shared.module";
import {FormsModule} from "@angular/forms";

// RUTAS
import {PAGES_ROUTES} from "./pages.route";
import {GraficoDonaComponent} from "../components/grafico-dona/grafico-dona.component";


@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent,
    IncrementadorComponent,
    GraficoDonaComponent
  ],
  exports:[
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    ChartsModule
  ]
})
export class PagesModule {}
