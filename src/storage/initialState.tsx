import { makeVar } from '@apollo/client';

import { getLocalStorageCurrency } from './storageActions';
import { getLocalStorageCart } from './storageActions';
import { storageVarType } from '../types/types'

const initialState: storageVarType = {
    currentCurrency: getLocalStorageCurrency || {
        label: 'USD',
        symbol: '$',
    },
    productsInCart: getLocalStorageCart || [],
    isModalWindow: false,
    modalMessage: null,
    isCurrencyDropdown: false,
    isCartOverlay: false,
};

const storage = makeVar(initialState);
export default storage;
