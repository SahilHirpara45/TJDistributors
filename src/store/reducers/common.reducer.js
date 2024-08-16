import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    sidebarShow: true
}

const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        switchSiderBar: (state, { payload }) => {
            console.log(state.sidebarShow)
            state.sidebarShow = !state.sidebarShow
        },
    },
})

export const { switchSiderBar } = commonSlice.actions
export default commonSlice.reducer