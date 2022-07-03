export type AttributeItemType = {
    displayValue: string,
    value: string,
    id: string,
}

export type AttributeType = {
    id: string,
    items: AttributeItemType[],
    name: string,
    type: string,
}

export type CategoryType = {
    name: string,
}

export type CurrencyType = {
    label: string,
    symbol: string,
}

export type PriceType = {
    currency: CurrencyType,
    amount: number,
}

export type productType = {
    id: string,
    productId: string,
    name: string,
    inStock: boolean,
    gallery: string[],
    attributes: AttributeType[],
    brand: string,
    prices: PriceType[],
    selectedAttribute: SelectedAttributeType,
    amount: number,
    productUrl: string,
}

export type SelectedAttributeType = {
    id: string,
    item: AttributeItemType,
    name: string,
    type: string,
}

export type storageVarType = {
    currentCurrency: CurrencyType,
    productsInCart: productType[],
    modalMessage: React.ReactNode,
    isModalWindow: boolean,
    isCurrencyDropdown: boolean,
    isCartOverlay: boolean,
}
