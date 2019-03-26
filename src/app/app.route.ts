import {Routes, RouterModule} from "@angular/router";

// COMPONENTES
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./login/register.component";
import {NopagesfoundComponent} from "./shared/nopagefound/nopagesfound.component";


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NopagesfoundComponent }
];

export const APP_ROUTES= RouterModule.forRoot(appRoutes, {useHash:true});
