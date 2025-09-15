import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() imageUrl: string = '';
  @Input() buttonStyle: string = 'bg-blue-500 text-white hover:bg-blue-600';
}
