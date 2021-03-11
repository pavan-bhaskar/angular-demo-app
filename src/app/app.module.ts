import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer.component';
import { HeaderComponent } from './header.component';
import { demoapiService } from './services/demoapi.service';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [demoapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
