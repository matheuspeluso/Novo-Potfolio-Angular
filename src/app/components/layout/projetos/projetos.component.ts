import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from '../../../pipes/truncate.pipe';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    TruncatePipe // Importe o pipe personalizado
  ]
})
export class ProjetosComponent {

  projetos = [
    {
      nome: 'BackEnd Java Spring Boot - CRUD de Clientes e Endereços',
      descricao: `Este é o projeto trata-se de um microserviço para realizar operações de CRUD (Create, Read, Update, Delete) de clientes Endereço e enviar dados de cliente para uma fila do RabbitMQ na qual será consumida por uma segunda API ApiEmailMessage.
      Está API utiliza Java 21 com Spring boot, banco de dados PostgreSQL para armazenar os dados. Além disso, ele se comunica com um serviço de mensageria RabbitMQ para enviar informações sobre os clientes para outras partes do sistema, garantindo uma arquitetura escalável e desacoplada.`,
      imagens: [
        'https://raw.githubusercontent.com/matheuspeluso/ClientesApi_CRUD-de-cliente-e-enviando-dados-para-fila-de-rabbitmq/main/print_API/print%20api%20cliente.png'
      ],
      deployLink: 'LINK_DO_DEPLOY_1',
      githubLink: 'https://github.com/matheuspeluso/ClientesApi_CRUD-de-cliente-e-enviando-dados-para-fila-de-rabbitmq/blob/main/print_API/print%20api%20cliente.png',
      imagemAtual: 0, // Índice da imagem atual
      hasDeploy: false,
      expandido: false // Estado inicial de expansão
    },
    {
      nome: 'FrontEnd Angular - WebClientePF',
      descricao: 'O projeto WebClientePF trata-se de um front-end desenvolvido em Angular e Bootstrap 5 para estilização. Este projeto consome a "BackEnd Java Spring Boot - CRUD de Clientes e Endereços" e realiza operações de Crud (Create, Read, Update, Delete) de clientes e endereços.',
      imagens: [
        'https://raw.githubusercontent.com/matheuspeluso/webClientePf/main/prints_projeto/consulta_cliente.png', 
        'https://github.com/matheuspeluso/webClientePf/raw/main/prints_projeto/cadastro_cliente01.png', 
        'https://github.com/matheuspeluso/webClientePf/raw/main/prints_projeto/cadastro_cliente02.png',
        'https://github.com/matheuspeluso/webClientePf/raw/main/prints_projeto/edicao_cliente.png',
        'https://github.com/matheuspeluso/webClientePf/raw/main/prints_projeto/consulta_endereco.png',
        'https://github.com/matheuspeluso/webClientePf/raw/main/prints_projeto/cadastro_endereco.png',
        'https://github.com/matheuspeluso/webClientePf/raw/main/prints_projeto/edicao_endereco.png'
      ],
      deployLink: 'LINK_DO_DEPLOY_2',
      githubLink: 'https://github.com/matheuspeluso/webClientePf',
      imagemAtual: 0, // Índice da imagem atual
      hasDeploy: false,
      expandido: false // Estado inicial de expansão
    }
  ];

  // Função para ir para a imagem anterior
  irParaImagemAnterior(projetoIndex: number) {
    const projeto = this.projetos[projetoIndex];
    projeto.imagemAtual = (projeto.imagemAtual === 0) ? projeto.imagens.length - 1 : projeto.imagemAtual - 1;
  }

  // Função para ir para a próxima imagem
  irParaImagemProxima(projetoIndex: number) {
    const projeto = this.projetos[projetoIndex];
    projeto.imagemAtual = (projeto.imagemAtual === projeto.imagens.length - 1) ? 0 : projeto.imagemAtual + 1;
  }

  // Função para alternar o estado de expansão
  toggleExpand(projeto: any) {
    projeto.expandido = !projeto.expandido;
  }
}