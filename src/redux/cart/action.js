const type = {
    ADD_TO_CART: "ADD_TO_CART",
    REMOVE_TO_CART: "REMOVE_TO_CART",
    INCREASE_PRODUCT: "INCREASE_PRODUCT",
    DECREASE_PRODUCT: "DECREASE_PRODUCT",
    GET_PRODUCT_IN_CART: "GET_PRODUCT_IN_CART",
    CHECKED_PRODUCT: "CHECKED_PRODUCT",
    UNCHECKED_PRODUCT: "UNCHECKED_PRODUCT",
    RESET_TOTAL: "RESET_TOTAL",
}

const actions = {
    get_product_in_cart: () => {
        return{
            type: type.GET_PRODUCT_IN_CART,
            payload: {
                
            }
        }
    },
    add_to_cart: (id) => {
        return{
            type: type.ADD_TO_CART,
            payload: {
                id
            }
        }
    },
    remove_to_cart: (id) => {
        return{
            type: type.REMOVE_TO_CART,
            payload: {
                id
            }
        }
    },
    increase_product: (id) => {
        return{
            type: type.INCREASE_PRODUCT,
            payload: {
                id
            }
        }
    },
    decrease_product: (id) => {
        return{
            type: type.DECREASE_PRODUCT,
            payload: {
                id
            }
        }
    },
    checked_product: (id) => {
        return{
            type: type.CHECKED_PRODUCT,
            payload: {
                id
            }
        }
    },
    unchecked_product: (id) => {
        return{
            type: type.UNCHECKED_PRODUCT,
            payload: {
                id
            }
        }
    },
    reset_total: (total, totalProduct) => {
        return{
            type: type.RESET_TOTAL,
            payload: {
                total,
                totalProduct
            }
        }
    }
}

export default {type,actions}