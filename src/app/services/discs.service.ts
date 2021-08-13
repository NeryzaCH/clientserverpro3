import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListDisc } from '../interfaces/discsAPI';

@Injectable({
  providedIn: 'root'
})
export class DiscsService {

  url:string = "https://app-neryzach.herokuapp.com/";

  constructor(private http:HttpClient) { }

  getAllDiscs(page:number):Observable<ListDisc[]>{
    let direccion = this.url + "discs?page=" + page;
    return this.http.get<ListDisc[]>(direccion);

  }

}
