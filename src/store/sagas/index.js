import { takeEvery } from 'redux-saga/effects';


import * as actionType from '../actions/actionTypes';
import { logoutSaga, checkAuthTimeoutSaga, authUserSaga, authCheckStateSaga }  from './auth';
import { initIngredientsSaga } from './burgerBuilder';
import { fetchOrdersSaga, purchaseBurgerSaga } from './order';

export function* watchAuth() {
    yield takeEvery(actionType.AUTH_INITIATE_LOGOUT, logoutSaga);
    yield takeEvery(actionType.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
    yield takeEvery(actionType.AUTH_USER, authUserSaga);
    yield takeEvery(actionType.AUTH_CHECK_STATE, authCheckStateSaga);
    

}

export function* watchBurgerBuilder() {
    yield takeEvery(actionType.INIT_INGREDIENT, initIngredientsSaga);
}

export function* watchOrder() {
    yield takeEvery(actionType.PURCHASE_BURGER, purchaseBurgerSaga);
    yield takeEvery(actionType.FETCH_ORDER, fetchOrdersSaga);
}