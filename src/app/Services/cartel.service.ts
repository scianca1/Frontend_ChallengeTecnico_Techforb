import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartelService {
  
  private _seleccioonado:boolean=false;
  seleccionado:BehaviorSubject<boolean>= new BehaviorSubject(this._seleccioonado);
  private _content:string="";
  content:BehaviorSubject<string>= new BehaviorSubject(this._content);

  constructor() { }

  set(content:string){
      this._seleccioonado=true;
      this._content=content;
      this.content.next(this._content);
      this.seleccionado.next(this._seleccioonado);
  }
}
