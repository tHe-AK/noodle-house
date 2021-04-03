import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Noodle } from '../shared/models/Noodle';
import { NoodleService } from '../shared/services/noodle.service';

@Component({
  selector: 'app-noodle-detail',
  templateUrl: './noodle-detail.component.html',
  styleUrls: ['./noodle-detail.component.scss']
})
export class NoodleDetailComponent implements OnInit {

  noodle: Noodle = {};

  constructor(
    private router: ActivatedRoute,
    private noodleService: NoodleService
  ) {
    this.router.params.subscribe(param => {
      const noodleId = param.id;
      this.noodleService.fetchNoodlesWithImage().subscribe(noodles => {
        this.noodle = noodles.find(({Id}) => Id === +noodleId);
      });
    });
  }

  ngOnInit(): void {
  }

}
