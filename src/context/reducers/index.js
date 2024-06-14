import {combineReducers} from 'redux'
import useAuthReducer from './userAuthReducer'
import projectReducer from './projectReducer'

const myReducer = combineReducers({
    user : useAuthReducer,
    projects: projectReducer
})

export default myReducer