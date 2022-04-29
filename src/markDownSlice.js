import { createSlice } from '@reduxjs/toolkit';
import marked from './markObject';
import initialMarkDown from './initialMarkDown';

const markDownSlice = createSlice({
    name: 'markDownObject',
    initialState: {
        markDown: marked.parse(initialMarkDown)
    },
    reducers: {
        setMarkDown: (state, action) => {
            state.markDown = action.payload;
        }
    }
});

//const setMarkDown = markDownSlice.actions.setMarkDown;

export default markDownSlice.reducer;
export const { setMarkDown } = markDownSlice.actions;