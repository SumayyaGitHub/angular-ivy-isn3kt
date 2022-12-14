import { Component, OnInit } from '@angular/core';
import { Input, Output, OnChanges, EventEmitter } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-dialog', //dialog container from filter component
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  animations: [
    trigger('dialog', [
      // for dialog open
      // transition('void => *', [
      //   style({ transform: 'scale3d(.3, .3, .3)' }),
      //   animate(100),
      // ]),
      // // for dialog close
      // transition('* => void', [
      //   animate(100, style({ transform: 'scale3d(.0, .0, .0)' })),
      // ]),
    ]),
  ],
})
export class DialogComponent implements OnInit {
  @Input() closable = true;
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
}
