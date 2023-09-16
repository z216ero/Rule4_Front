export interface IPost {
    id: number,
    likeCount: number,
    viewCount: number,
    imagePath: string,
    tags: ITag[],
    added: string,
    fileExtension: string
}

export interface IAddPost {
    file: File,
    tags: IAddTag[]
}

export interface ITag {
    code: string,
    name: string,
    type: TagType,
    postCount?: number
}

export interface IAddTag {
    code: string,
    name: string,
    type: TagType,
}

export enum TagType {
    Copyright,
    General,
    Artist,
    Character
}

export interface IFIlterModel {
    ignoreTags: ITag[],
    includeTags: ITag[]
}