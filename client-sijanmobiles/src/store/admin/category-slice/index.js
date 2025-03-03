import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addNewCategory = createAsyncThunk(
  "/Categorys/addnewCategory",
  async (formData) => {
    const result = await axios.post(
      `${import.meta.env.VITE_API_PROD_BACKEND}/api/admin/categories/add`,
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return result?.data;
  }
);

export const fetchAllCategories = createAsyncThunk(
  "/categories/fetchAllCategories",
  async () => {
    const result = await axios.get(
      `${import.meta.env.VITE_API_PROD_BACKEND}/api/admin/categories/get`
    );

    return result?.data;
  }
);

export const deleteCategory = createAsyncThunk(
  "/Categorys/deleteCategory",
  async (id) => {
    const result = await axios.delete(
      `${
        import.meta.env.VITE_API_PROD_BACKEND
      }/api/admin/categories/delete/${id}`
    );

    return result?.data;
  }
);

const AdminCategorySlice = createSlice({
  name: "adminCategory",
  initialState: { isLoading: false, CategoryList: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.CategoryList = action.payload.data;
      })
      .addCase(fetchAllCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.CategoryList = [];
      })
      .addCase(addNewCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addNewCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.CategoryList = [...state.CategoryList,action.payload.data];
      })
      .addCase(addNewCategory.rejected, (state, action) => {
        state.isLoading = false;
     
      });
  },
});

export default AdminCategorySlice.reducer;
