import * as TYPES from './types';

// ------------------------------------------------------------
// ACTIONS - GLOBAL APP
// ------------------------------------------------------------
const globalAppSetLoadingOn = () => ({
    type: TYPES.RX_GLOBAL_APP.RX_GLOBAL_APP_LOADING_ON,
});
const globalAppSetLoadingOff = () => ({
    type: TYPES.RX_GLOBAL_APP.RX_GLOBAL_APP_LOADING_OFF,
});

// ------------------------------------------------------------
// ACTIONS - SHIP LIST
// ------------------------------------------------------------
const shipListClear = () => ({
    type: TYPES.RX_SHIP_LIST.RX_SHIP_LIST_CLEAR,
});
const shipListSet = (data) => ({
    type: TYPES.RX_SHIP_LIST.RX_SHIP_LIST_SET,
    payload: data,
});

// ------------------------------------------------------------
// ACTIONS - SHIP DETAILS
// ------------------------------------------------------------
const shipDetailClear = () => ({
    type: TYPES.RX_SHIP_ITEM_DETAIL.RX_SHIP_ITEM_DETAIL_CLEAR,
});
const shipDetailSet = (data) => ({
    type: TYPES.RX_SHIP_ITEM_DETAIL.RX_SHIP_ITEM_DETAIL_SET,
    payload: data,
});

// ------------------------------------------------------------
// ACTIONS - PILOTS
// ------------------------------------------------------------
const pilotsClear = () => ({
    type: TYPES.RX_SHIP_PILOTS.RX_SHIP_PILOTS_CLEAR,
});
const pilotsSet = (data) => ({
    type: TYPES.RX_SHIP_PILOTS.RX_SHIP_PILOTS_SET,
    payload: data,
});

export {
    globalAppSetLoadingOn,
    globalAppSetLoadingOff,
    shipListClear,
    shipListSet,
    shipDetailClear,
    shipDetailSet,
    pilotsClear,
    pilotsSet,
};
