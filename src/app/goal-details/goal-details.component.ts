import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Newgoal} from '../goal';


@Component({
  selector: 'app-goal-details',
  templateUrl: './goal-details.component.html',
  styleUrls: ['./goal-details.component.css']
})
export class GoalDetailsComponent implements OnInit {

  @Input() goal: Newgoal;
  @Output() isComplete = new EventEmitter<boolean>();

  goalComplete(complete: boolean) {
    this.isComplete.emit(complete);
  }

  constructor() { }

  ngOnInit() {
  }
}
