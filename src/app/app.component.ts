import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FreetimeComponent } from './freetime/freetime.component';
import { MessagesComponent } from './messages/messages.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FreetimeComponent,MessagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = "Assignment work";
}
