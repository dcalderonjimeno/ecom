import {
    SET_SHOP_CATEGORIES,
    SET_NAVBAR_LINKS,
    SET_SHOP_PRODUCTS,
    FILTER_PRODUCTS_WITH_CATEGORY_ID,
    FILTER_PRODUCTS_WITH_QUERY
} from './types';

export function filterProductsWithQuery(fields) {
    return ({
        type: FILTER_PRODUCTS_WITH_QUERY,
        payload: fields
    })
}

export function filterProductsWithCategoryId(_id) {
    return ({
        type: FILTER_PRODUCTS_WITH_CATEGORY_ID,
        payload: _id
    })
}

export function fetchShopCategories() {
    return ({
        type: SET_SHOP_CATEGORIES,
        payload: [
            {
                _id: 0,
                title: 'All'
            },
            {
                _id: 1,
                title: 'JavaScript'
            },
            {
                _id: 2,
                title: 'UI/UX'
            },
            {
                _id: 3,
                title: 'Linux'
            },
            {
                _id: 4,
                title: 'Python'
            },
            {
                _id: 5,
                title: 'UML'
            },
            {
                _id: 6,
                title: 'Ruby'
            }
        ]
    })
}

export function fetchShopProducts() {
    return ({
        type: SET_SHOP_PRODUCTS,
        payload: [
            {
                _id: 0,
                title: 'JavaScript in the Browser',
                description: 'Os recordamos que la solicitud que hicisteis en septiembre solo era válida para el primer semestre. Si queréis continuar en la modalidad remota durante el segundo semestre, tendréis que volver a enviar la solicitud como se indica arriba.',
                price: 1.99,
                belongsTo: [0, 1]
            },
            {
                _id: 1,
                title: 'Graph Database',
                description: 'Os recordamos que la solicitud que hicisteis en septiembre solo era válida para el primer semestre. Si queréis continuar en la modalidad remota durante el segundo semestre, tendréis que volver a enviar la solicitud como se indica arriba.',
                price: 1.99,
                belongsTo: [0, 6]
            },
            {
                _id: 2,
                title: 'Full Stack Development',
                description: 'Os recordamos que la solicitud que hicisteis en septiembre solo era válida para el primer semestre. Si queréis continuar en la modalidad remota durante el segundo semestre, tendréis que volver a enviar la solicitud como se indica arriba.',
                price: 1.99,
                belongsTo: [0, 1, 4]
            },
            {
                _id: 3,
                title: 'User Interface Design',
                description: 'Os recordamos que la solicitud que hicisteis en septiembre solo era válida para el primer semestre. Si queréis continuar en la modalidad remota durante el segundo semestre, tendréis que volver a enviar la solicitud como se indica arriba.',
                price: 1.99,
                belongsTo: [0, 2]
            },
            {
                _id: 4,
                title: 'JavaScript Development',
                description: 'Os recordamos que la solicitud que hicisteis en septiembre solo era válida para el primer semestre. Si queréis continuar en la modalidad remota durante el segundo semestre, tendréis que volver a enviar la solicitud como se indica arriba.',
                price: 1.99,
                belongsTo: [0, 1]
            },
            {
                _id: 5,
                title: 'User Experience Design',
                description: 'Os recordamos que la solicitud que hicisteis en septiembre solo era válida para el primer semestre. Si queréis continuar en la modalidad remota durante el segundo semestre, tendréis que volver a enviar la solicitud como se indica arriba.',
                price: 1.99,
                belongsTo: [0, 2]
            },
            {
                _id: 6,
                title: 'Advanced OOP',
                description: 'Os recordamos que la solicitud que hicisteis en septiembre solo era válida para el primer semestre. Si queréis continuar en la modalidad remota durante el segundo semestre, tendréis que volver a enviar la solicitud como se indica arriba.',
                price: 1.99,
                belongsTo: [0, 6]
            }
        ]
    })
}