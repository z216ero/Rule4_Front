import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITag, IAddTag } from "../../models/Post";

interface ITagState {
    data: ITag[],
    selectedTagsToAdd: IAddTag[],
    filterIncludeTag: ITag[],
    filterIgnoreTag: ITag[]
}

const initialState: ITagState = {
    data: [],
    selectedTagsToAdd: [],
    filterIgnoreTag: [],
    filterIncludeTag: []
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
        },
        clearTagList({ selectedTagsToAdd },) {
            selectedTagsToAdd = selectedTagsToAdd.splice(0, selectedTagsToAdd.length);;
        },
        addTagToInclude({ filterIncludeTag, filterIgnoreTag }, { payload }: PayloadAction<IAddTag>) {
            const existTagInList = filterIncludeTag.find(tag => tag.code === payload.code);
            if (existTagInList === undefined)
                filterIncludeTag.push(payload);

            const index = filterIgnoreTag.findIndex((tag) => tag.code === payload.code);
            if (index > -1)
                filterIgnoreTag.splice(index, 1);
        },
        removeTagFromInclude({ filterIncludeTag }, { payload }: PayloadAction<IAddTag>) {
            filterIncludeTag.splice(filterIncludeTag.findIndex((tag) => tag.code === payload.code), 1);
        },
        addTagToIgnore({ filterIgnoreTag, filterIncludeTag }, { payload }: PayloadAction<IAddTag>) {
            const existTagInList = filterIgnoreTag.find(tag => tag.code === payload.code);
            if (existTagInList === undefined)
                filterIgnoreTag.push(payload);

            const index = filterIncludeTag.findIndex((tag) => tag.code === payload.code);
            if (index > -1)
                filterIncludeTag.splice(index, 1);
        },
        removeTagFromIgnore({ filterIgnoreTag }, { payload }: PayloadAction<IAddTag>) {
            filterIgnoreTag.splice(filterIgnoreTag.findIndex((tag) => tag.code === payload.code), 1);
        },
        clearFilterTagList({ filterIgnoreTag, filterIncludeTag },) {
            filterIgnoreTag = filterIgnoreTag.splice(0, filterIgnoreTag.length);
            filterIncludeTag = filterIncludeTag.splice(0, filterIncludeTag.length);
        },
    }
})

export const { addTag,
    removeTag,
    addTagToAdd,
    removeTagFromList,
    clearTagList,
    addTagToIgnore,
    addTagToInclude,
    clearFilterTagList,
    removeTagFromIgnore,
    removeTagFromInclude
} = tagSlice.actions;

export default tagSlice.reducer;