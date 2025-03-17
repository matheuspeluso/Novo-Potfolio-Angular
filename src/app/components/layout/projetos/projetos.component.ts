import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  imports:[CommonModule],
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent {

  projetos = [
    {
      nome: 'Projeto 1',
      descricao: 'Descrição breve do projeto.',
      imagens: [
        'https://www.mercadoeeventos.com.br/wp-content/uploads/2022/10/Embratur-Brasil-ultrapassa-marca-de-1-milhao-de-turistas-estrangeiros-recebidos-pela-primeira-vez-desde-2020.png', 
        'https://t.ctcdn.com.br/JlHwiRHyv0mTD7GfRkIlgO6eQX8=/640x360/smart/i257652.jpeg', 
        'https://ehgomes.com.br/wp-content/uploads/2023/08/Vectorizer.AI-A-Ferramenta-que-Transforma-Imagens-em-Vetores.webp'
      ],

      deployLink: 'LINK_DO_DEPLOY_1',
      githubLink: 'LINK_DO_GITHUB_1',
      imagemAtual: 0, // Índice da imagem atual
      hasDeploy: false
    },

    {
      nome: 'WebClientesPF',
      descricao: 'FrontEnd AngularJS com Bootstrap, integrado com APIClientes, telas de CRUD para cliente e endereço.',
      imagens: [
        'https://www.mercadoeeventos.com.br/wp-content/uploads/2022/10/Embratur-Brasil-ultrapassa-marca-de-1-milhao-de-turistas-estrangeiros-recebidos-pela-primeira-vez-desde-2020.png', 
        'https://t.ctcdn.com.br/JlHwiRHyv0mTD7GfRkIlgO6eQX8=/640x360/smart/i257652.jpeg', 
        'https://ehgomes.com.br/wp-content/uploads/2023/08/Vectorizer.AI-A-Ferramenta-que-Transforma-Imagens-em-Vetores.webp'
      ],

      deployLink: 'LINK_DO_DEPLOY_2',
      githubLink: 'LINK_DO_GITHUB_2',
      imagemAtual: 0, // Índice da imagem atual
      hasDeploy: true
    },

    {
      nome: 'projeto 33',
      descricao: 'FrontEnd AngularJS com Bootstrap, integrado com APIClientes, telas de CRUD para cliente e endereço.',
      imagens: [
        'https://www.mercadoeeventos.com.br/wp-content/uploads/2022/10/Embratur-Brasil-ultrapassa-marca-de-1-milhao-de-turistas-estrangeiros-recebidos-pela-primeira-vez-desde-2020.png', 
        'https://t.ctcdn.com.br/JlHwiRHyv0mTD7GfRkIlgO6eQX8=/640x360/smart/i257652.jpeg', 
        'https://ehgomes.com.br/wp-content/uploads/2023/08/Vectorizer.AI-A-Ferramenta-que-Transforma-Imagens-em-Vetores.webp'
      ],

      deployLink: 'LINK_DO_DEPLOY_2',
      githubLink: 'LINK_DO_GITHUB_2',
      imagemAtual: 0 // Índice da imagem atual
    }
    // Adicione mais projetos conforme necessário
  ];

  // Função para ir para a imagem anterior
  irParaImagemAnterior(projetoIndex: number) {
    if (this.projetos[projetoIndex].imagemAtual === 0) {
      this.projetos[projetoIndex].imagemAtual = this.projetos[projetoIndex].imagens.length - 1;
    } else {
      this.projetos[projetoIndex].imagemAtual--;
    }
  }

  // Função para ir para a próxima imagem
  irParaImagemProxima(projetoIndex: number) {
    if (this.projetos[projetoIndex].imagemAtual === this.projetos[projetoIndex].imagens.length - 1) {
      this.projetos[projetoIndex].imagemAtual = 0;
    } else {
      this.projetos[projetoIndex].imagemAtual++;
    }
  }
}
