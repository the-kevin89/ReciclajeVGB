import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProblemaComponent } from './pages/problema/problema.component';
import { AreasContaminadasComponent } from './pages/areas-contaminadas/areas-contaminadas.component';
import { ReciclarBasuraComponent } from './pages/reciclar-basura/reciclar-basura.component';
import { MotivarAyudarComponent } from './pages/motivar-ayudar/motivar-ayudar.component';
import { ForoIdeasComponent } from './pages/foro-ideas/foro-ideas.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'problema', component: ProblemaComponent },
  { path: 'areas-contaminadas', component: AreasContaminadasComponent },
  { path: 'reciclar-basura', component: ReciclarBasuraComponent },
  { path: 'motivar-ayudar', component: MotivarAyudarComponent },
  { path: 'foro-ideas', component: ForoIdeasComponent },
  { path: '**', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
