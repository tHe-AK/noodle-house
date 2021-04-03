import { Component, Input, OnInit } from '@angular/core';
import { Noodle } from '../../models/Noodle';

@Component({
  selector: 'app-noodle-card',
  templateUrl: './noodle-card.component.html',
  styleUrls: ['./noodle-card.component.scss']
})
export class NoodleCardComponent implements OnInit {

  @Input() noodle: Noodle;

  constructor() { }

  ngOnInit(): void {
  }

}
