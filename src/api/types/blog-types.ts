
export interface IBlog {
    id: number | string | null,
    content: string,
    created_at: string,
    creator_id: number,
    title: string,
    updated_at: string
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

