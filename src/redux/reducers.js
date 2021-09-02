import * as TYPES from './types';

// ------------------------------------------------------------
// REDUCER - GLOBAL APP
// ------------------------------------------------------------
const initialValueGlobalApp = {
    loading: true,
};
const globalApp = (state = initialValueGlobalApp, action) => {
    switch(action.type) {
        case TYPES.RX_GLOBAL_APP.RX_GLOBAL_APP_LOADING_ON:
            return {
                ...state,
                loading: true,
            };
        case TYPES.RX_GLOBAL_APP.RX_GLOBAL_APP_LOADING_OFF:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};

// ------------------------------------------------------------
// REDUCER - SHIP LIST
// ------------------------------------------------------------
const initialValueShipList = [];
const shipList = (state = initialValueShipList, action) => {
    switch(action.type) {
        case TYPES.RX_SHIP_LIST.RX_SHIP_LIST_CLEAR:
            return initialValueShipList;
        case TYPES.RX_SHIP_LIST.RX_SHIP_LIST_SET:
            return action.payload;
        default:
            return state;
    }
};

// ------------------------------------------------------------
// REDUCER - SHIP DETAILS
// ------------------------------------------------------------
const initialValueShipDetail = null;
const shipDetail = (state = initialValueShipDetail, action) => {
    switch(action.type) {
        case TYPES.RX_SHIP_ITEM_DETAIL.RX_SHIP_ITEM_DETAIL_CLEAR:
            return initialValueShipDetail;
        case TYPES.RX_SHIP_ITEM_DETAIL.RX_SHIP_ITEM_DETAIL_SET:
            return action.payload;
        default:
            return state;
    }
};

// ------------------------------------------------------------
// REDUCER - PILOTS
// ------------------------------------------------------------
const initialValuePilots = [];
const pilots = (state = initialValuePilots, action) => {
    switch(action.type) {
        case TYPES.RX_SHIP_PILOTS.RX_SHIP_PILOTS_CLEAR:
            return initialValuePilots;
        case TYPES.RX_SHIP_PILOTS.RX_SHIP_PILOTS_SET:
            return action.payload;
        default:
            return state;
    }
};

export {
    globalApp,
    shipList,
    shipDetail,
    pilots,
}