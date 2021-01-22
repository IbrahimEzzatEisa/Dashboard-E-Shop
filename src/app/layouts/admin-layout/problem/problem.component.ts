import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-problem',
  template: `<router-outlet></router-outlet>`
})
export class ProblemComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
      
  }

}
