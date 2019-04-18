import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { MessageService } from '../message.service';
// import {Output} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  flag = true;
  event = '';
  toggle(event): void {this.flag = !this.flag; this.event = event;}
  @Input() somevar: number = 14;
  @Input()
  count: number = 0;

  @Output()
  change: EventEmitter<number> = new EventEmitter<number>();

  increment() {
    this.count++;
    this.change.emit(this.count);
    // console.log(this.count);
  }

  decrement() {
    this.count--;
    this.change.emit(this.count);
  }
  constructor(public messageService: MessageService) {}
  ngOnInit() {
  }

}
