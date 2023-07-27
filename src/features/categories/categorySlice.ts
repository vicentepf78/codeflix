import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface Category {
    id: string;
    name: string;
    is_active: boolean;
    created_at: string;
    updated_at: string;
    deleted_at: null | string;
    description: null | string;
  }

const category: Category = {
    id: "6b8744c0-215d-431c-b08c-756155bbd175",
    name: "Olive",
    is_active: true,
    created_at: "2023-07-25T10:59:09+0000",
    updated_at: "2023-07-25T10:59:09+0000",
    deleted_at: null,
    description: "Olive xddsfsfs dsfs f"
}


export const initialState = [
        category,
        { ...category, id: "1b8744c0-215d-431c-b08c-756155bbd175", name: "Peaches" },
        {...category, id: "2b8744c0-215d-431c-b08c-756155bbd175", name: "Apple" },
        {...category, id: "3b8744c0-215d-431c-b08c-756155bbd175", name: "Android" },
        {...category, id: "4b8744c0-215d-431c-b08c-756155bbd175", name: "Orange" },
        {...category, id: "5b8744c0-215d-431c-b08c-756155bbd175", name: "Peach" },  
        {...category, id: "64b8744c0-215d-431c-b08c-756155bbd175", name: "Balas" },  
        {...category, id: "72b8744c0-215d-431c-b08c-756155bbd175", name: "Panela" },  
        {...category, id: "83b8744c0-215d-431c-b08c-756155bbd175", name: "Filmes" },    
        {...category, id: "99b8744c0-215d-431c-b08c-756155bbd175", name: "Bolo" },  
    ];

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: initialState,
    reducers: {
      createCategory(state, action) {},
      updateCategory(state, action) {},
      deleteCategory(state, action) {},
    },
  });

  // Selectors 

  export const selectCategories = (state: RootState) => state.categories

  export default categoriesSlice.reducer;