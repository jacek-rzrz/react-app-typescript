import { DECREMENT_ENTHUSIASM, INCREMENT_ENTHUSIASM } from '../constants/index';
import { BaseAction } from 'redux-actions';

export function enthusiasm(state: number = 10, action: BaseAction): number {
    switch (action.type) {
        case INCREMENT_ENTHUSIASM:
            return state + 1;
        case DECREMENT_ENTHUSIASM:
            return state - 1;
        default:
            return state;
    }
}