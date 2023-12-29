import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
    lat: string;
    long: string;
}

const initialState: UserState = {
    lat: '',
    long: '',
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setLatAndLong: (state, action: PayloadAction<UserState>) => {
            state.lat = action.payload.lat;
            state.long = action.payload.long;
        },
    },
});

export const { setLatAndLong } = userSlice.actions;

export default userSlice.reducer;
