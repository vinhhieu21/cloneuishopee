import actions from './action';
import fakeData from '../../components/home/data/fakeData'

const initialState = {
    listProductInCart: [],
    total: 0,
    listNameShop: [],
    totalProduct: 0,
    totalInCart: 0,
    totalProductInCart: 0
}

const _addToCart = (state, id) => {
    let addedItem = fakeData.find(item => item.id === id)
    let existed_item = state.listProductInCart.find(item => item.id === id);
    addedItem.amountsell = addedItem.amount * (100 - addedItem.sale) / 100
    if (existed_item) {
        addedItem.quantity += 1;
        return {
            ...state,
            total: state.total + addedItem.amount * (100 - addedItem.sale) / 100,
            totalProduct: state.totalProduct += 1
        }
    }
    else {
        addedItem.quantity = 1;
        let listNameShop = [...state.listNameShop];
        let newTotal = state.total + addedItem.amount * (100 - addedItem.sale) / 100;
        if (!state.listNameShop.find(item => item.nameShop === addedItem.nameShop)) {
            let newShop = {
                index: addedItem.index,
                nameShop: addedItem.nameShop,
                liked: addedItem.liked,
            }
            listNameShop = [...listNameShop, newShop]
        }
        return {
            ...state,
            listProductInCart: [...state.listProductInCart, addedItem],
            listNameShop: [...listNameShop],
            total: newTotal,
            totalProduct: state.totalProduct += 1
        }
    }
}

const _increaseProduct = (state, id) => {
    let itemIncrease = state.listProductInCart.find(item => item.id === id)
    itemIncrease.quantity += 1;
    return {
        ...state,
        total: state.total + itemIncrease.amount * (100 - itemIncrease.sale) / 100,
        totalInCart: state.totalInCart + itemIncrease.amount * (100 - itemIncrease.sale) / 100,
        totalProduct: state.totalProduct += 1
    }
}

const _decreaseProduct = (state, id) => {
    let itemDecrease = state.listProductInCart.find(item => item.id === id)
    if (itemDecrease.quantity > 1) {
        itemDecrease.quantity = itemDecrease.quantity - 1;
        return {
            ...state,
            total: state.total - itemDecrease.amount * (100 - itemDecrease.sale) / 100,
            totalInCart: state.totalInCart - itemDecrease.amount * (100 - itemDecrease.sale) / 100,
            totalProduct: state.totalProduct -= 1
        }
    }
    if (itemDecrease.quantity === 1) {
        let itemProduct = state.listProductInCart.find(item => item.id === id);
        let listProductInCart = state.listProductInCart.filter(item => item.id !== id);
        console.log("existed_nameshop: ", listProductInCart);
        let existed_nameshop = listProductInCart.filter(item => item.nameShop === itemProduct.nameShop);
        //console.log("existed_nameshop: ",existed_nameshop.length);
        let listNameShop = existed_nameshop.length > 0 ? [...state.listNameShop] : state.listNameShop.filter(item => item.nameShop !== itemProduct.nameShop);

        return {
            ...state,
            listProductInCart: [...listProductInCart],
            listNameShop: [...listNameShop],
            total: state.total - itemDecrease.amount * (100 - itemDecrease.sale) / 100,
            totalInCart: state.totalInCart - itemDecrease.amount * (100 - itemDecrease.sale) / 100,
            totalProduct: state.totalProduct -= 1
        }
    }
}

const _removeProduct = (state, id) => {
    let itemDecrease = state.listProductInCart.find(item => item.id === id)
    let itemProduct = state.listProductInCart.find(item => item.id === id);
    let listProductInCart = state.listProductInCart.filter(item => item.id !== id);
    //console.log("existed_nameshop: ", listProductInCart);
    let existed_nameshop = listProductInCart.filter(item => item.nameShop === itemProduct.nameShop);
    //console.log("existed_nameshop: ",existed_nameshop.length);
    let listNameShop = existed_nameshop.length > 0 ? [...state.listNameShop] : state.listNameShop.filter(item => item.nameShop !== itemProduct.nameShop);

    return {
        ...state,
        listProductInCart: [...listProductInCart],
        listNameShop: [...listNameShop],
        total: state.total - itemDecrease.amount * itemDecrease.quantity * (100 - itemDecrease.sale) / 100,
        totalInCart: state.totalInCart - itemDecrease.amount * itemDecrease.quantity * (100 - itemDecrease.sale) / 100,
        totalProduct: state.totalProduct = state.totalProduct - itemDecrease.quantity,
    }
}

const _checkedProduct = (state, id) => {
    let itemDecrease = state.listProductInCart.find(item => item.id === id)
    return {
        ...state,
        totalInCart: state.totalInCart + itemDecrease.amount * itemDecrease.quantity * (100 - itemDecrease.sale) / 100,
        totalProductInCart: state.totalProductInCart = state.totalProductInCart + itemDecrease.quantity,
    }
}

const _uncheckedProduct = (state, id) => {
    let itemDecrease = state.listProductInCart.find(item => item.id === id)
    return {
        ...state,
        totalInCart: state.totalInCart - itemDecrease.amount * itemDecrease.quantity * (100 - itemDecrease.sale) / 100,
        totalProductInCart: state.totalProductInCart = state.totalProductInCart - itemDecrease.quantity,
    }
}


const reducer = (state = initialState, action) => {
    console.log('action: ', action)
    switch (action.type) {
        case actions.type.GET_PRODUCT_IN_CART:
            return {
                ...state,
                totalInCart: state.total,
                totalProductInCart: state.totalProduct
            }
        case actions.type.ADD_TO_CART:
            return _addToCart(state, action.payload.id);
        case actions.type.REMOVE_TO_CART:
            return _removeProduct(state, action.payload.id)
        case actions.type.INCREASE_PRODUCT:
            return _increaseProduct(state, action.payload.id)
        case actions.type.DECREASE_PRODUCT:
            return _decreaseProduct(state, action.payload.id)
        case actions.type.CHECKED_PRODUCT:
            return _checkedProduct(state, action.payload.id)
        case actions.type.UNCHECKED_PRODUCT:
            return _uncheckedProduct(state, action.payload.id)
        case actions.type.RESET_TOTAL:
            return {
                ...state,
                total: action.payload.total,
                totalProduct: action.payload.totalProduct
            }
        default:
            return state
    }
}
export default reducer