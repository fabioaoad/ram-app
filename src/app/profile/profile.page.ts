import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  profileId : string;
  character;

  constructor( private activateRoute: ActivatedRoute,
               private  http: HttpClient) { }

  ngOnInit() {
    //console.log(this.activateRoute.snapshot.paramMap.get('id'));
    this.profileId = this.activateRoute.snapshot.paramMap.get('id');
    this.http.get('https://rickandmortyapi.com/api/character/' + this.profileId)
        .subscribe( resp => {
         console.log(resp);
          this.character = resp;
       });


  }

}
