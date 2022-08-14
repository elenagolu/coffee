import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Cup } from '../cup.model';
import { CupService } from '../cup.service';

@Component({
  selector: 'app-cup-detail',
  templateUrl: './cup-detail.component.html',
  styleUrls: ['./cup-detail.component.css']
})
export class CupDetailComponent implements OnInit {
  cup: Cup;
  id: number;

  constructor(
    private cupService: CupService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.cup = this.cupService.getCups(this.id);
      }
    );
  }

  onAdd() {
    this.cupService.addIngToSL(this.cup.ing)
  }

}
