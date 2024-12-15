import { Action, createReducer, on } from "@ngrx/store";
import { initialState } from "./counter.state";
import { changeChannelName, customIncrement, decrement, increment, reset } from "./counter.actions";

// Make sure your state has ChannelName
const _counterReducer = createReducer(
    initialState, 
    on(increment, (state) => {
        return {
            ...state,
            counter: state.counter + 1,
        };
    }),
    on(decrement, (state) => {
        return {
            ...state,
            counter: state.counter - 1,
        };
    }),
    on(reset, (state) => {
        return {
            ...state,
            counter: 0,
        };
    }),
    on(customIncrement, (state, action) => {
        return {
            ...state,
            counter: state.counter + action.count,
        };
    }),
    on(changeChannelName, (state) => {
        return {
            ...state,
            ChannelName: 'Modified Web Dev',
        };
    })
);

export function counterReducer(state: { counter: number; ChannelName: string } | undefined, action: Action<string>) {
    return _counterReducer(state, action);    
}
