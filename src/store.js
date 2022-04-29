import { configureStore } from '@reduxjs/toolkit'
import markDownReducer from './markDownSlice'

const store = configureStore({
    reducer: {
        theMark: markDownReducer
    }
});

export default store;