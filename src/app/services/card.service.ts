import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private pagNumber: number = 16;
  constructor(private httpCliente: HttpClient) {}

  listCharacters(page?: number): Observable<any> {
    if (page) {
      this.pagNumber += page;
    }
    return this.httpCliente.get(
      `http://gateway.marvel.com/v1/public/characters?ts=13092001&apikey=9c6a6c788954cf569d77b5d4a881d660&hash=8cb97dd993b3a9c3aa25b7f798cbe716&limit=` +
        this.pagNumber
    );
  }
}
