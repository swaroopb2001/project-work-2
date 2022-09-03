import { createReducer } from '@reduxjs/toolkit'

const initialState= {
    isAuthenticated:true
 }

export const userreducer= createReducer(initialState,{
    loginRequest: (state)=>{
        state.loading= true
    },
    loginSuccess: (state, action)=>{
        state.loading= false
        state.user = action.payload
        state.isAuthenticated= true 
        
    },
    loginFailure: (state, action )=>{
        state.loading= false
        state.error= action.payload
        state.isAuthenticated= false
    },
    loadUserRequest:(state)=>{
        state.loading= true
    },
    loadUserSuccess:(state,action)=>{
        state.loading= false
        state.user= action.payload
        state.isAuthenticated= true
    },
    loadUserFailure: (state, action )=>{
        state.loading= false
        state.error= action.payload
        state.isAuthenticated= false
    }
})