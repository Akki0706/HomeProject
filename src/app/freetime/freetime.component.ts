import { Component } from '@angular/core';
import { Freetime } from './freetime';
import { FormsModule } from '@angular/forms';
import { FREETIME } from '../myfreetime';
import { NgFor,NgIf } from '@angular/common';
import { FreetimeDetailsComponent } from '../freetime-details/freetime-details.component';
import { FreetimeService } from '../freetime.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-freetime',
  standalone: true,
  imports: [FormsModule,NgFor,NgIf, FreetimeDetailsComponent],
  templateUrl: './freetime.component.html',
  styleUrl: './freetime.component.css'
})
export class FreetimeComponent {
freetimes:Freetime[] = [];
constructor(private freetimeService:FreetimeService, private messageService:MessageService){}

  ngOnInit(): void{
    this.getfreetime();
  }
  getfreetime(): void{
    this.freetimeService.getfreetime().subscribe(freetimess => this.freetimes = freetimess);
  }

selectedfreetime?:Freetime
OnSelect(freetime: Freetime): void {
  this.selectedfreetime = freetime;
  this.messageService.add(`FreetimeComponent:Selected Freetime id=${freetime.id}`);
}
}
