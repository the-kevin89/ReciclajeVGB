import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProblemaComponent } from './pages/problema/problema.component';
import { AreasContaminadasComponent } from './pages/areas-contaminadas/areas-contaminadas.component';
import { ReciclarBasuraComponent } from './pages/reciclar-basura/reciclar-basura.component';
import { MotivarAyudarComponent } from './pages/motivar-ayudar/motivar-ayudar.component';
import { ForoIdeasComponent } from './pages/foro-ideas/foro-ideas.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { InicioSesionComponent } from './pages/inicio-sesion/inicio-sesion.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ProblemaComponent,
    AreasContaminadasComponent,
    ReciclarBasuraComponent,
    MotivarAyudarComponent,
    ForoIdeasComponent,
    RegistroComponent,
    InicioSesionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
