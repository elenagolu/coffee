import { Component, OnInit } from '@angular/core';
import { Cup } from './cup.model';
import { CupService } from './cup.service';

@Component({
  selector: 'app-cups',
  templateUrl: './cups.component.html',
  styleUrls: ['./cups.component.css'],
  providers: [CupService],
})
export class CupsComponent implements OnInit {
  selectedCup: Cup;

  constructor() { }

  ngOnInit(): void {
  }

}
