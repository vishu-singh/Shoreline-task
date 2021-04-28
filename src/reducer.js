import {combineReducers } from 'redux'
import { UserReducer } from './components/Products/userReducer'


export const RootReducer=combineReducers({
    User:UserReducer
})