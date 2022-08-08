import { Component, Input, OnInit } from '@angular/core';
import { Cup } from '../cup.model';
import { CupService } from '../cup.service';

@Component({
  selector: 'app-cup-detail',
  templateUrl: './cup-detail.component.html',
  styleUrls: ['./cup-detail.component.css']
})
export class CupDetailComponent implements OnInit {
  @Input() cup: Cup;

  constructor(private cupService: CupService) { }

  ngOnInit(): void {
  }

  onAdd() {
    this.cupService.addIngToSL(this.cup.ing)
  }

}
