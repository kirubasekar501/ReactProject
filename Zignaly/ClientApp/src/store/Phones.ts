import { Action, Reducer } from 'redux';
import { AppThunkAction } from './';
import axios from 'axios';

export interface PhonesState {
    isLoading: boolean;
    loadType?: string;
    phones: Phones[];
}

export interface Phones {
    id: number;
    title: string;
    description: string;
    color: string;
    price: string;
    imagedata: Blob;
}

interface RequestPhonesAction {
    type: 'REQUEST_PHONES';
    loadType: string;
}

interface ReceivePhonesAction {
    type: 'RECEIVE_PHONES';
    loadType?: string;
    phones: Phones[];
}

type KnownAction = RequestPhonesAction | ReceivePhonesAction;

export const actionCreators = {
    requestPhones: (loadType: string): AppThunkAction<KnownAction> => (dispatch, getState) => {
        const appState = getState();
        if (appState && appState.phones && (loadType !== appState.phones.loadType || loadType == 'refresh')) {
            axios.get(`api/phones`)
                .then((response: any) => {
                    dispatch({ type: 'RECEIVE_PHONES', loadType: loadType, phones: response.data.response });
                });

            dispatch({ type: 'REQUEST_PHONES', loadType: loadType });
        }
    }
};

const unloadedState: PhonesState = { phones: [], isLoading: false };

export const reducer: Reducer<PhonesState> = (state: PhonesState | undefined, incomingAction: Action): PhonesState => {
    if (state === undefined) {
        return unloadedState;
    }
    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'REQUEST_PHONES':
            return {
                loadType: action.loadType,
                phones: state.phones,
                isLoading: true
            };
        case 'RECEIVE_PHONES':
            if (action.loadType === state.loadType) {
                return {
                    loadType: action.loadType,
                    phones: action.phones,
                    isLoading: false
                };
            }
            break;
    }
    return state;
};