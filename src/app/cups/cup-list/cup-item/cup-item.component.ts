import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cup } from '../../cup.model';

@Component({
  selector: 'app-cup-item',
  templateUrl: './cup-item.component.html',
  styleUrls: ['./cup-item.component.css']
})
export class CupItemComponent implements OnInit {
  @Input() cup: Cup;
  @Output() cupSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() { }

  onSelected() {
    this.cupSelected.emit();
  }

}
