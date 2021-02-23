import {
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL,
    SET_CART_PRODUCTS
} from './types';

export function setPurchaseDetail(_id) {
    return ({
        type: SET_PURCHASE_DETAIL,
        payload: _id
    })
}

export function fetchCartProducts() {
    return ({
        type: SET_CART_PRODUCTS,
        payload: [
            {
                _id: 0,
                product: {
                    _id: 0,
                    title: 'JavaScript in the Browser',
                    description: 'Os recordamos que la solicitud que hicisteis en septiembre solo era válida para el primer semestre. Si queréis continuar en la modalidad remota durante el segundo semestre, tendréis que volver a enviar la solicitud como se indica arriba.',
                    price: 1.99,
                    belongsTo: [0, 1]
                },
                quantity: 2
            },
            {
                _id: 1,
                product: {
                    _id: 1,
                    title: 'Graph Database',
                    description: 'Os recordamos que la solicitud que hicisteis en septiembre solo era válida para el primer semestre. Si queréis continuar en la modalidad remota durante el segundo semestre, tendréis que volver a enviar la solicitud como se indica arriba.',
                    price: 1.99,
                    belongsTo: [0, 6]
                },
                quantity: 1
            },
        ]
    })
}

export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                total: 8.02,
                orderNumber: 'A0043999538',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Diego Calderon',
                    shippingAddress: '1234 West State Street',
                }
            },
            {
                _id: 1,
                total: 18.02,
                orderNumber: 'A0043999538',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Willyrex',
                    shippingAddress: '1234 Andorra',
                }
            },
            {
                _id: 2,
                total: 6.22,
                orderNumber: 'A0043999538',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Maria Amiga',
                    shippingAddress: '1234 Usera',
                }
            },
            {
                _id: 3,
                total: 28.43,
                orderNumber: 'A0043999538',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Benito Sola',
                    shippingAddress: '1234 South State Street',
                }
            },
            {
                _id: 4,
                total: 7.69,
                orderNumber: 'A0043999538',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Madison Scott x',
                    shippingAddress: '3442 Playboy Mansion',
                }
            },
            {
                _id: 5,
                total: 1.23,
                orderNumber: 'A0043999538',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Watson Pattinson',
                    shippingAddress: '5271 West State Street',
                }
            },
            {
                _id: 6,
                total: 83.71,
                orderNumber: 'A0043999538',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Bubu Farmanafagan',
                    shippingAddress: '8724 West State Street',
                }
            },
            {
                _id: 7,
                total: 8.02,
                orderNumber: 'A0043999538',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Roberto Esbelto',
                    shippingAddress: '9125 West State Street',
                }
            }
        ]
    })
}