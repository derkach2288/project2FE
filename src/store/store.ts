import {configureStore, Action, ThunkAction, Reducer } from "@reduxjs/toolkit"


export const store = configureStore({
    reducer: {  
    },    
  }) 


export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action<string>
>

export const makeStore = () => store;

