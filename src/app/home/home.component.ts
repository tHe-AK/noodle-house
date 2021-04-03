import { Component, OnInit } from '@angular/core';
import { Noodle } from '../shared/models/Noodle';
import { NoodleService } from '../shared/services/noodle.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  noodles: Array<Noodle>;

  constructor(
    private noodleService: NoodleService
  ) { }

  ngOnInit(): void {
    this.fetchNoodles();
  }

  fetchNoodles(): void {
    this.noodleService.fetchNoodlesWithImage()
      .subscribe({
        next: (noodles) => {
          this.noodles = noodles;
        },
        error: (err) => {
          console.error(err);
          alert('Oops! Something went wrong.');
        }
      });
  }

}
