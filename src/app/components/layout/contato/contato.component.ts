import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importe o HttpClient
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {
  formData = {
    nome: '',
    email: '',
    mensagem: ''
  };

  confirmationMessage = false;
  errorMessage = false;

  constructor(private http: HttpClient) {} // Injete o HttpClient

  onSubmit() {
    this.http.post('https://formspree.io/f/mqapkeoy', this.formData)
      .subscribe({
        next: (response) => {
          this.confirmationMessage = true; // Exibe a mensagem de sucesso
          this.errorMessage = false; // Garante que a mensagem de erro não seja exibida
          this.formData = { nome: '', email: '', mensagem: '' }; // Reseta o formulário
        },
        error: (error) => {
          this.errorMessage = true; // Exibe a mensagem de erro
          this.confirmationMessage = false; // Garante que a mensagem de sucesso não seja exibida
        }
      });
  }

  closeConfirmation() {
    this.confirmationMessage = false; // Fecha a mensagem de sucesso
  }
  
  closeError() {
    this.errorMessage = false; // Fecha a mensagem de erro
  }

}