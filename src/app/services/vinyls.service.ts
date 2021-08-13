import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {VinylResult} from '../interfaces/vinylsAPI';

@Injectable({
  providedIn: 'root'
})
export class VinylsService {

  constructor(private http: HttpClient) {
    //this.getUsers().subscribe((result:UserResult)=>{
    //  console.log(result.data);
    //});
   }

   getVinyls(){
    return this.http.get<VinylResult>("https://app-neryzach.herokuapp.com/vinyls?page1");
  }
}
