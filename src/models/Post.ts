export interface IPost {
    id: number,
    likeCount: number,
    viewCount: number,
    imagePath: string,
    tags: ITag[]
}

export interface ITag {
    code: string,
    name: string,
    type: TagType
}

export enum TagType {
    General,
    Artist,
    Character
}