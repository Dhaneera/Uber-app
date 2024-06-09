import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state

interface Location {
  lat: number;
  lng: number;
}

interface Origin {
  location: Location;
  description:string;
}

interface Destination{
  location: Location;
  description:string;
}
interface NavState {
    origin: Origin|null;
    destination:Destination| null;
    travelTimeInfrormation: any|null;
    
}

// Define the initial state using that type
const initialState: NavState = {
  origin:null,
  destination:null,
  travelTimeInfrormation:null
}

export const navSlice = createSlice({
  name: 'nav',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setOrgin: (state,action:PayloadAction<Origin>) => {
      state.origin= action.payload
    },
    setdestination: (state,action:PayloadAction<Destination>) => {
      state.destination= action.payload
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    settravelTimeInfrormation: (state, action: PayloadAction<any>) => {
      state.travelTimeInfrormation = action.payload
    },
  },
})

export const { setOrgin, setdestination, settravelTimeInfrormation } = navSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectOrgin = (state: RootState) => state.nav.origin
export const selectDestination=(state:RootState) =>state.nav.destination
// export const selectTravelTimeInfrormation=(state:RootState) =>state.nav.travelTimeInfrormation
export default navSlice.reducer