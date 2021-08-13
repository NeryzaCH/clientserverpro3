import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DiscsService } from 'src/app/services/discs.service';
import { FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms'
import { ListDisc } from 'src/app/interfaces/discsAPI';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  newForm = new FormGroup({
    namealbum: new FormControl(''),
    artist: new FormControl(''),
    publication: new FormControl(''),
    gender: new FormControl(''),
    avatar: new FormControl('')
  });


  constructor(private router:Router, private api:DiscsService) { }

  ngOnInit(): void {
  }

  postForm(form:ListDisc){   
    this.api.postDisc(form).subscribe(data =>{
  console.log(data);
 })
}
}
