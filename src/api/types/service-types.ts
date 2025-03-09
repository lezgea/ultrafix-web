
export interface IService {
    id: number | string,
    title: string,
    slug: string,
    icon: number,
    icon_url?: string

}


// REQUEST TYPES

export interface IGetLocationServicesRequest {
    location: number,
}



// RESPONSE TYPES

export interface IGetLocationServicesResponse {
    residential: IService[],
    commercial: IService[],
}