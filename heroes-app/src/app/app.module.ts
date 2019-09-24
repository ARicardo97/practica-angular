import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

//Rutas
import { APP_ROUTING } from './app.routes';

//Servicios
import { HeroesService } from './servicios/heroes.service';

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroeComponent } from './components/heroe/heroe.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    FooterComponent,
    HeroeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  //en Provides van todos los servicios
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
