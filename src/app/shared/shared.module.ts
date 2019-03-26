import {NgModule} from "@angular/core";

// COMPONENTES
import {BreadcrumbsComponent} from "./breadcrumbs/breadcrumbs.component";
import {HeaderComponent} from "./header/header.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {NopagesfoundComponent} from "./nopagefound/nopagesfound.component";

@NgModule({
  declarations: [
    BreadcrumbsComponent,
    HeaderComponent,
    SidebarComponent,
    NopagesfoundComponent
  ],
  exports: [
    BreadcrumbsComponent,
    HeaderComponent,
    SidebarComponent,
    NopagesfoundComponent
  ]
})
export class SharedModule{ }
