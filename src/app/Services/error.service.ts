import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  private _error:string='';
  error:BehaviorSubject<string>= new BehaviorSubject(this._error);
  constructor() { }

  setError(error:string){
    this._error=error;
    this.error.next(this._error);
  }
}
