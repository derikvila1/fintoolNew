import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {RequestCreate, ResponseCreate} from "./input.model";

@Injectable({
  providedIn: 'root'
})

export class InputService {

  private url = "localhost:3000/inputs/cadastrar";

  constructor(private http: HttpClient) { }

  
  createInput(request: RequestCreate): Observable<ResponseCreate>{
    return this.http.post<ResponseCreate>(this.url, request);
  }

}
