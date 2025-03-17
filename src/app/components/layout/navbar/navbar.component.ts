import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports:[
    CommonModule
  ]
})
export class NavbarComponent {
  isMenuOpen: boolean = false; // Controla o estado do menu responsivo
  isDarkMode: boolean = false; // Controla o tema claro/escuro

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    // Verifica se o código está rodando no navegador
    if (isPlatformBrowser(this.platformId)) {
      // Verifica se há uma preferência salva no localStorage
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        this.isDarkMode = true;
        document.documentElement.classList.add('dark');
      } else {
        this.isDarkMode = false;
        document.documentElement.classList.remove('dark');
      }
    }
  }

  // Função para alternar o estado do menu responsivo
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Função para fechar o menu responsivo
  closeMenu(): void {
    this.isMenuOpen = false; // Fecha o menu
  }

  // Função para alternar o tema claro/escuro
  toggleTheme(): void {
    // Verifica se o código está rodando no navegador
    if (isPlatformBrowser(this.platformId)) {
      this.isDarkMode = !this.isDarkMode;

      if (this.isDarkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark'); // Salva o tema escuro no localStorage
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light'); // Salva o tema claro no localStorage
      }
    }
  }
}