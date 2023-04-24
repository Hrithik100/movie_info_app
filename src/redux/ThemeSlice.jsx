import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   value: JSON.parse(localStorage.getItem('lightMode')) || false
}

export const themeSlice = createSlice({
  name: 'lightMode',
  initialState,
  reducers: {
    toggleLightMode(state) {
        state.value = !state.value;
        localStorage.setItem('lightMode', JSON.stringify(state.value))
    }
  },
})

// Action creators are generated for each case reducer function
export const { toggleLightMode } = themeSlice.actions

export default themeSlice.reducer