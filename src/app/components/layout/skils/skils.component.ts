import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skils',
  imports: [CommonModule],
  templateUrl: './skils.component.html',
  styleUrl: './skils.component.css'
})

export class SkilsComponent {
  skills = [
    { name: 'AngularJS', percentage: 100 },
    { name: 'Docker', percentage: 100 },
    { name: 'AWS', percentage: 100 },
    { name: 'HTML 5', percentage: 100 },
    { name: 'JavaScript', percentage: 100 },
    { name: 'CSS 3', percentage: 100 },
    { name: 'Bootstrap 5', percentage: 100 },
    { name: 'API RESTful', percentage: 100 },
    { name: 'Java', percentage: 100 },
    { name: 'Spring Boot', percentage: 100 },
    { name: 'RabbitMQ', percentage: 100 },
    { name: 'MongoDB', percentage: 100 },
    { name: 'MySQL', percentage: 100 },
    { name: 'PostgreSQL', percentage: 100 }
  ];

  getSkillColor(skillName: string) {
    switch(skillName) {
      case 'AngularJS': return 'bg-red-500';
      case 'Docker': return 'bg-blue-500';
      case 'AWS': return 'bg-yellow-500';
      case 'HTML 5': return 'bg-orange-500';
      case 'JavaScript': return 'bg-yellow-500';
      case 'CSS 3': return 'bg-blue-500';
      case 'Bootstrap 5': return 'bg-cyan-500';
      case 'API RESTful': return 'bg-red-500';
      case 'Java': return 'bg-orange-500';
      case 'Spring Boot': return 'bg-sky-500';
      case 'RabbitMQ': return 'bg-yellow-500';
      case 'MongoDB': return 'bg-orange-500';
      case 'MySQL': return 'bg-red-500';
      case 'PostgreSQL': return 'bg-sky-500';
      default: return 'bg-gray-500';
    }
  }
}