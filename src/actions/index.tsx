import * as constants from '../constants';
import { createAction } from 'redux-actions';

export const incrementEnthusiasm = createAction(constants.INCREMENT_ENTHUSIASM);
export const decrementEnthusiasm = createAction(constants.DECREMENT_ENTHUSIASM);
