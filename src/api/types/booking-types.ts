
export interface IZipCheckingRequest {
    zip: string | number,
}

export interface IZipCheckingResponse {
    status: string,
    data: {
        zip: string,
        branch: {
            city: string,
            number: string,
            address: string,
            timezone: string
        },
        residential_fee: string,
        commercial_fee: string
    },
    title: string,
    description: string
}


export interface IService {
    id: number,
    text: string,
}

export interface IGetServicesResponse {
    status: string,
    data: {
        residential: IService[],
        commercial: IService[],
    },
    title: string,
    description: string
}


export interface IAppliance {
    service_id?: string | number,
    type?: string,
    brand?: string,
    problem?: string,
}





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


export interface IBlogInfoRequest {
    id: number | string,
}

export interface IBlogInfoResponse {
    status: string,
    data: IBlogItem,
}


export interface IBlogUpdateRequest {
    id: string,
    title: string,
    description: string,
    content: string,
    read_time: number,
}