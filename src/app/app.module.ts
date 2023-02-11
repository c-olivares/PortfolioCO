
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, routing, RouterModule],
  providers: [],
  bootstrap: [AppComponent, HomeComponent]
})

export class AppModule {
}


