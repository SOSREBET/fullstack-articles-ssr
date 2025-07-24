import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { IArticleParams } from '../../types/Article'


export const initialState: IArticleParams = { 
  page: '1', 
  search: '',
}

const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    setParams(state, action: PayloadAction<Partial<IArticleParams>>) {
      if (action.payload.page !== undefined) {
        state.page = action.payload.page
      }
      if (action.payload.search !== undefined) {
        state.search = action.payload.search
      }
    },
    setPage(state, action: PayloadAction<string>) {
        state.page = action.payload
    },
    setSearch(state, action: PayloadAction<string>) {
        state.search = action.payload
    },
  },
})

export const { setParams, setPage, setSearch } = articleSlice.actions
export default articleSlice.reducer