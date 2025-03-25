import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre',
  imports: [],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.css'
})
export class SobreComponent {

  titulo : string = "Dev Matheus Nascimento"
  descricao : string = `
    Sou um desenvolvedor fullstack apaixonado por tecnologia e por criar soluções inovadoras que fazem a diferença.
    Desde o início da minha jornada, sempre busquei aprimorar minhas habilidades e participar de desafios que me permitissem crescer profissionalmente.
    
    Minha experiência envolve o desenvolvimento de sistemas completos, desde a concepção da arquitetura até a entrega final,
    garantindo eficiência, escalabilidade e uma ótima experiência para o usuário.
    
    Já trabalhei em projetos desafiadores, como o Hackathon Coti Informática + Vibetex, onde desenvolvi, em equipe,
    um sistema de ponto eletrônico com rastreamento por geolocalização em apenas 36 horas.
    
    Além disso, participei da criação de um ecossistema integrado para gestão de clientes e usuários, desenvolvendo soluções
    que facilitaram a comunicação entre diferentes serviços e melhoraram a organização dos dados.
    
    Sou movido por desafios e aprendizado contínuo. Meu foco está em criar aplicações que sejam funcionais, intuitivas e bem estruturadas.
    
    Estou sempre aberto a novas oportunidades e pronto para contribuir com projetos inovadores!
  `;

  imagemPerfil = '/ft_perfil.jpg';

}
