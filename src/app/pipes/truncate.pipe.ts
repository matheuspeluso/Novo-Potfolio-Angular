import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit?: number): string {
    if (!value) return ''; // Retorna vazio se o valor for nulo ou indefinido
    if (limit === undefined || value.length <= limit) {
      return value; // Retorna o texto completo se não houver limite
    }
    return value.substring(0, limit) + '...'; // Trunca o texto com reticências
  }
}