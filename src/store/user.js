import { createSlice } from "@reduxjs/toolkit";


const slice = createSlice({
    name: "user",
    initialState: {
        user: null
    },
    reducers: {
        loginReducer: (state, action) => {
            state.user = action.payload
        },
        logoutReducer: (state, action) => {
            state.user = null
        }
    }
})

export default slice.reducer


const { loginReducer, logoutReducer } = slice.actions

export const login = ({name, password}) => async dispatch =>  {
    try {
        dispatch(loginReducer({name}))
    } catch (e) {
        console.error(e.message)
    }
}

export const logout = () => async dispatch => {
    try {
        return dispatch(logoutReducer())
    } catch (e) {
        console.error(e.message)
    }
}