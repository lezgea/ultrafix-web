
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

// REQUESTS TYPES

export interface IBrandsListRequest {
    // city: string,
}

export interface IBrandInfoRequest {
    id: string,
}



// RESPONSE TYPES

export interface IBrandsListResponse {
    data: IBrand[],
}

export interface IBrandInfoResponse {
    data: {
        id: number,
        text: string,
        color: string,
        sort: number,
        logo: {
            id: number,
            name: string,
            url: string,
            mime_type: string,
            size: number,
            created_at: string,
            type: string,
            sizes: boolean
        }
    }
}