import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { changeChannelName, customIncrement } from '../state/counter.actions';
import { getChannelName } from '../state/counter.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrl: './custom-counter-input.component.css'
})
export class CustomCounterInputComponent {
  value: number = 0;
  ChannelName$:Observable<string> | undefined
  
  constructor(private store: Store<{counter : CounterState}>){}

  ngOnInit(): void {
    this.ChannelName$ = this.store.select(getChannelName)
    }

  onAdd(){
    this.store.dispatch(customIncrement({count : +this.value}));
  }
  onChangeChannelName(){
    this.store.dispatch(changeChannelName())
  }
}
