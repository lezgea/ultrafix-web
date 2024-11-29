
export interface IBlog {
    id: number | string | null,
    content: string,
    created_at: string,
    creator_id: number,
    title: string,
    updated_at: string
}

export interface IBlogItem {
    id: number | string | null,
    cover: {
        id: number,
        name: string,
        url: string,
        mime_type: string,
        size: number,
        created_at: string,
        type: string,
    },
    title: string,
    content: string,
    description: string,
    content_short: string,
    read_time: number,
    active: number,
    creator: {
        id: number,
        name: string
    },
    category: boolean,
    created_at: string
}


export interface IBlogCreateRequest {
    cover: number | string | null,
    title: string,
    description?: string,
    content: string,
    read_time: number,
}

export interface IBlogCreateResponse {
    data: IBlog,
    description: string,
    status: string,
    title: string,
}


export interface IBlogListRequest {
    skip: number,
    limit: number,
}

export interface IBlogListResponse {
    data: IBlogItem[],
    status: string,
    count: number,
    skip: number,
    limit: number,
}