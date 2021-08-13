import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { UserResult } from 'src/app/interfaces/usersAPI';
import { VinylResult } from 'src/app/interfaces/vinylsAPI';
import { DiscsService } from 'src/app/services/discs.service';
import { UsersService } from 'src/app/services/users.service';
import { VinylsService } from 'src/app/services/vinyls.service';
import { Router } from '@angular/router';
import { ListDisc } from 'src/app/interfaces/discsAPI';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /*constructor(private service: UsersService) { }
  users: UserResult;

  ngOnInit(): void {
    this.service.getUsers().subscribe((result:UserResult)=>{
      this.users = result;
      console.log(result);
    });
  }*/

  /*constructor(private service: VinylsService) { }
  vinyls: VinylResult;

  ngOnInit(): void {
    this.service.getVinyls().subscribe((result:VinylResult)=>{
      this.vinyls = result;
      console.log(result);
    });
  }*/
  discs:ListDisc[];

  constructor(private api:DiscsService, private router:Router){}
  ngOnInit(): void{
    this.api.getAllDiscs(1).subscribe(data => {
      this.discs = data;
    })
  }

  editDisc(id){
    this.router.navigate(['contact', id]);
  }

  newDisc(){
    this.router.navigate(['login']);
  }
}
