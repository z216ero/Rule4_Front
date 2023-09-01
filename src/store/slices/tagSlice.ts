import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITag, IAddTag } from "../../models/Post";

interface ITagState {
    data: ITag[],
    selectedTagsToAdd: IAddTag[]
}

const initialState: ITagState = {
    data: [],
    selectedTagsToAdd: []
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
        addTagToAdd({ selectedTagsToAdd }, { payload }: PayloadAction<IAddTag>) {
            const existTagInList = selectedTagsToAdd.find(tag => tag.code === payload.code);
            if (existTagInList === undefined)
                selectedTagsToAdd.push(payload);
        },
        removeTagFromList({ selectedTagsToAdd }, { payload }: PayloadAction<IAddTag>) {
            selectedTagsToAdd.splice(selectedTagsToAdd.findIndex((tag) => tag.code === payload.code), 1);
        }
    }
})

export const { addTag, removeTag, addTagToAdd, removeTagFromList } = tagSlice.actions;
export default tagSlice.reducer;