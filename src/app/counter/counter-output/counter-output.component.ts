import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { Observable, Subscription } from 'rxjs';
import { getCounter } from '../state/counter.selector';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {
  // @Input() counter: number = 0;
  counter$: Observable<number> | undefined;

  counterSubscption: Subscription | undefined;
  constructor(private store: Store<{counter: CounterState}>){}
  ngOnInit(): void {
    this.counter$ = this.store.select(getCounter)
    }
}
