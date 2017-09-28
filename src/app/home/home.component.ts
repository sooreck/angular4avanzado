import { Component, OnInit } from '@angular/core';
import { fadeIn} from '../animation';
declare var $: any;
declare var jquery: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [fadeIn]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  togglee() {
    $('#parrafo').toggle(1000);
  }

}
