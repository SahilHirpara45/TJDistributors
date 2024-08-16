import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import performRequest from '../../common/network'

export const DoLogin = createAsyncThunk('user/loginAction', async (param) => {
    try {
        let Data = {
            email: param?.email,
            password: param?.password
        }
        const responseData = await performRequest('auth/login', Data)
        console.log('Response', responseData)
        if (!responseData?.error) {
            return { ...responseData?.body }
        } else throw responseData?.error
    } catch (e) {
        throw e
    }
})

const initialState = {
    userData: {},
    token: null,
    loading: false,
    isLogin: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state, { payload }) => {
            state.isLogin = false
            state.token = null
            localStorage.clear
        },

    },
    extraReducers: {
        [DoLogin.fulfilled]: (state, action) => {

            state.loading = false
            //   set all state
            console.log('Response', action)
            let responseData = action?.payload
            if (responseData.status) {
                toast.success("Login Success")
                state.token = responseData?.token
                state.isLogin = true
                state.userData = responseData?.data
            } else {
                toast.error("Invalid email or password");
            }

        },
    },
    [DoLogin.pending]: (state) => {
        state.loading = true
    },
    [DoLogin.rejected]: (state) => {
        state.loading = false
    },
})

export const { logout } = userSlice.actions
export default userSlice.reducer
