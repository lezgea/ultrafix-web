
export interface IBrand {
    id: number | string,
    text: string,
    color: string,
    sort: number,
    logo?: {
        id: number | string,
        name: string,
        url: string,
        mime_type: string,
        size: number,
        created_at: string,
        type: string
    }
}

export interface IBrandsListRequest {
    // city: string,
}

export interface IBrandsListResponse {
    data: IBrand[],
}