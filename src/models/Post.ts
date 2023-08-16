export interface IPost {
    id: number,
    likeCount: number,
    viewCount: number,
    imagePath: string,
    tags: ITag[],
    added: string
}

export interface ITag {
    code: string,
    name: string,
    type: TagType
}

export enum TagType {
    Copyright,
    General,
    Artist,
    Character
}