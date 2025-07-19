// import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
// import { userApi } from '../../services/userApi'
// import { IUserProfile } from '../../types/User'

// interface IUserState {
//     email: string
//     token: string
//     name: string
//     surname: string
//     patronymic: string
//     phone: string
//     last_password_change: string
//     can_change: string | true
// }

// const initialState: IUserState = { 
//   email: '', 
//   token: '',
//   name: '',
//   surname: '' ,
//   patronymic: '',
//   phone: '',
//   last_password_change: '',
//   can_change: true,
// }

// const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     setEmail(state, action: PayloadAction<string>) {
//         state.email = action.payload
//     },
//     resetEmail(state) {
//       // state.email = initialState.email
//       for (const [key, value] of Object.entries(initialState)) {
//         state[key as keyof IUserState] = value
//       }
//     },

//     setToken(state, action: PayloadAction<string>) {
//       state.token = action.payload
//     },

//     resetToken(state) {
//       state.token = initialState.token
//     },

//     updateUser(state, action: PayloadAction<IUserProfile>) {
//       state.name = action.payload.name ? action.payload.name : state.name
//       state.surname = action.payload.surname ? action.payload.surname : state.surname
//       state.patronymic = action.payload.patronymic ? action.payload.patronymic : state.patronymic
//       state.phone = action.payload.phone ? action.payload.phone : state.phone
//     },

//     resetUser(state) {
//       state.email = initialState.email
//       state.token = initialState.token
//       state.name = initialState.name
//       state.surname = initialState.surname
//       state.patronymic = initialState.patronymic
//       state.phone = initialState.phone
//       state.last_password_change = initialState.last_password_change
//       state.can_change = initialState.can_change

//     },
//   },
//   extraReducers(builder) {
//     builder.addMatcher(
//         userApi.endpoints.validateToken.matchFulfilled,
//         (state, action) => {
//             state.email = action.payload.email
//         }
//     )

//     builder.addMatcher(
//       userApi.endpoints.getProfile.matchFulfilled,
//       (state, action) => {
//         state.name = action.payload.name
//         state.surname = action.payload.surname
//         state.patronymic = action.payload.patronymic
//         state.phone = action.payload.phone
//         state.last_password_change = action.payload.last_password_change
//         state.can_change = action.payload.can_change
//       }
//     )
//   },
// })

// export const { setEmail, resetEmail, setToken, resetToken, resetUser, updateUser } = userSlice.actions
// export default userSlice.reducer