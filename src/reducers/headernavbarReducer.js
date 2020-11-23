import {
    SET_HEADER_LINKS,
    SET_HEADER_LINKS
} from '../actions/types';

const INITIAL_STATE = {
    headerLinks: [
        {
            title: 'helloooo'

        },
        {
            title:'HELLOOOO'
        }
    ],
    navbarLinks: [
        {
            title: 'account'

        },
        {
            title:'purchases'
        }
    ]
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case SET_HEADER_LINKS: 
            return {
                ...state,
                headerLinks: action.payload
            }
        case SET_NAVBAR_LINKS:
            return {
                ...state,
                navbarLinks: action.payload
            }
        default: return state;
    }
}