import { showAlert } from "@/utils/sweetAlert";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk for login
export const loginUser = createAsyncThunk(
  "auth/login",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (!response.ok) {
        showAlert({
          title: "Error!",
          text: data.message || "Login failed",
          icon: "error",
        });
        throw new Error(data.message || "Login failed");
      } else {
        showAlert({ title: "Success!", text: "Login successful" });
      }
      return data.user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk for logout
export const logoutUser = createAsyncThunk("auth/logout", async () => {
  await fetch("/api/auth/logout", { method: "POST" });
});

// Async thunk for checking authentication
export const checkAuth = createAsyncThunk("auth/checkAuth", async () => {
  const response = await fetch("/api/protected");
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Not authenticated");
  }
  return data.user;
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Logout
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
      })
      // Check Auth
      .addCase(checkAuth.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.loading = false;
        state.user = null;
      });
  },
});

export default authSlice.reducer;
