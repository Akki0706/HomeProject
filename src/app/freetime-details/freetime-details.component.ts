import { Component,Input } from '@angular/core';
import { NgFor,NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Freetime } from '../freetime/freetime';

@Component({
  selector: 'app-freetime-details',
  standalone: true,
  imports: [NgFor,NgIf,FormsModule],
  templateUrl: './freetime-details.component.html',
  styleUrl: './freetime-details.component.css'
})
export class FreetimeDetailsComponent {
  
  @Input() freetime?:Freetime;
}
