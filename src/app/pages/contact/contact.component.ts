import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListDisc } from 'src/app/interfaces/discsAPI';
import { DiscsService } from 'src/app/services/discs.service';
import { FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms'


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private activerouter:ActivatedRoute, private router:Router, private api:DiscsService) { }

  dataDisc:ListDisc;
  editForm = new FormGroup({
    namealbum: new FormControl(''),
    artist: new FormControl(''),
    publication: new FormControl(''),
    gender: new FormControl(''),
    avatar: new FormControl('')
  });

  ngOnInit(): void {
    let idDisc = this.activerouter.snapshot.paramMap.get('id');
    this.api.getSingleDisc(idDisc).subscribe(data =>{
      this.dataDisc = data[0];
      this.editForm.setValue({
        'namealbum' : this.dataDisc.namealbum,
        'artist' : this.dataDisc.artist,
        'publication' : this.dataDisc.publication,
        'gender' : this.dataDisc.gender,
        'avatar' : this.dataDisc.avatar

      });
    }) 
  }

  postForm(form:ListDisc){
    this.api.putDisc(form).subscribe(data  =>{
      console.log(data);

    })
  }
}
