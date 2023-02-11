import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";


const routes: Routes = [
    {path : "AppComponent", component:AppComponent,pathMatch:"full"},
    {path :"home", component:HomeComponent,pathMatch: "full"}
  ];
  
  export const routing = RouterModule.forRoot(routes);

export { RouterModule };
