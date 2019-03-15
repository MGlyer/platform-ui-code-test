import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() provider: 'Provider';
  @Input() inSelected: boolean;
  @Output() notifyParent: EventEmitter<any> = new EventEmitter();

  addToSaved(e) {
    this.notifyParent.emit(e)
  }

  removeFromSaved(e) {
    this.notifyParent.emit(e)
  }

  handleClick2(event) {
    console.log("in second handleClick", event)
  }

  constructor() { }

  ngOnInit() {
  }

}
