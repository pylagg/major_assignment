import { Component, OnInit,AfterViewInit } from '@angular/core';
import M from 'materialize-css';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements AfterViewInit {
options={};
  constructor() { }

  ngAfterViewInit(){
    var elems1 = document.querySelectorAll('.parallax');
    var instances= M.Parallax.init(elems1, this.options);

    var elems = document.querySelectorAll('.tabs');
    var instance = M.Tabs.init(elems, this.options);
  }

}
