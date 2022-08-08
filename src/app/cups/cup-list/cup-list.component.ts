import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Cup } from '../cup.model';
import { CupService } from '../cup.service';

@Component({
  selector: 'app-cup-list',
  templateUrl: './cup-list.component.html',
  styleUrls: ['./cup-list.component.css']
})
export class CupListComponent implements OnInit {
  @Output() cupWasSelected = new EventEmitter<Cup>();
  cups: Cup[];

  constructor(private cupService: CupService) { }

  ngOnInit() {
    this.cups = this.cupService.getCup();
  }

  onCupSelected(cup: Cup) {
    this.cupWasSelected.emit(cup);
  }

}
