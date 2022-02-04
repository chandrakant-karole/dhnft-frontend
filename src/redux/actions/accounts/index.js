import { SET_SETTING_REQUEST } from "../../types";

export const setSetting = (settings) => (dispatch) => {
    dispatch({
        type: SET_SETTING_REQUEST,
        payload: settings,
    });
};


export const metaMaskAddress = (getAddress) => {
    return (dispatch) => {
        dispatch({
            type: 'metaMaskAddress',
            payload: getAddress,
        })
    }
}