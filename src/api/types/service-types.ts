
export interface IService {
    id: number | string,
    title: string,
    slug: string,
    icon: number,
    icon_url?: string
}

export interface IServiceInfo extends IService {
    content: string,
    rank: number,
    created_at: string,
}

// ----------------------------------
// REQUEST TYPES

export interface IGetLocationServicesRequest {
    location: number,
}

export interface IGetServiceInfoRequest {
    slug: string,
}


// ----------------------------------
// RESPONSE TYPES

export interface IGetLocationServicesResponse {
    residential: IService[],
    commercial: IService[],
}

export interface IGetServiceInfoResponse {
    status: string,
    data: IServiceInfo,
    title: string,
    description: string,
}