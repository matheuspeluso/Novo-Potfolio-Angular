import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { FooterComponent } from "./components/layout/footer/footer.component";
import { CommonModule } from '@angular/common';
import { SobreComponent } from './components/layout/sobre/sobre.component';
import { SkilsComponent } from './components/layout/skils/skils.component';
import { ProjetosComponent } from './components/layout/projetos/projetos.component';
import { ContatoComponent } from './components/layout/contato/contato.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    NavbarComponent,
    FooterComponent,
    SobreComponent,
    SkilsComponent,
    ProjetosComponent,
    ContatoComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PortfolioAngular';
}
