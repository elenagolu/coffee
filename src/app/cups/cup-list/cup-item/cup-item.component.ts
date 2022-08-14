import { Component, Input, OnInit } from '@angular/core';
import { Cup } from '../../cup.model';

@Component({
  selector: 'app-cup-item',
  templateUrl: './cup-item.component.html',
  styleUrls: ['./cup-item.component.css']
})
export class CupItemComponent implements OnInit {
  @Input() cup: Cup;
  @Input() index: number;

  ngOnInit() { }

}
