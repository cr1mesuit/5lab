import { createSlice } from "@reduxjs/toolkit";

export const feedbackSlice = createSlice({
    name: "feedback",
    initialState: { reviews: [] },
    reducers: {
        addReview: (state, action) => {
            state.reviews.push(action.payload);
        },
    },
});

export const { addReview } = feedbackSlice.actions;
export default feedbackSlice.reducer;
