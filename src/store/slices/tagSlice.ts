import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITag } from "../../models/Post";

interface ITagState {
    data: ITag[]
}

const initialState: ITagState = {
    data: []
}

const tagSlice = createSlice({
    name: "tags",
    initialState,
    reducers: {
        addTag(state, { payload }: PayloadAction<ITag>) {
            state.data.push(payload);
        },
        removeTag(state, { payload }: PayloadAction<ITag>) {
            state.data.push(payload);
        },
    }
})

export const { addTag, removeTag } = tagSlice.actions;
export default tagSlice.reducer;