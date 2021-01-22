import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pharma',
  template: `<router-outlet></router-outlet>`
})
export class PharmaComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
      
  }

}
