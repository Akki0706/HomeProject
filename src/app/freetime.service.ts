import { Injectable } from '@angular/core';
import { Freetime } from './freetime/freetime';
import { FREETIME } from './myfreetime';
import { Observable,of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class FreetimeService {

  constructor(private messageService:MessageService) {   }
    getfreetime():Observable<Freetime[]>{
      const freetimes= of(FREETIME);
      this.messageService.add('Message Services is here :');
      return freetimes;
    }

}
