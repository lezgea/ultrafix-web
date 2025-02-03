
export interface IAppliance {
    service_id: string | number,
    type: string,
    brand: string | number | null,
    problem: string,
    issue: string | number,
    title: string,
}

export interface IBrand {
    value: number | string,
    title: string,
    label: string,
}

export interface ISelectedService {
    id: number | string, // 1
    title: string, // Refrigerator
    type: string, // Residential or Commercial
    fee: number | string, // $80
    issues: IIssue[],
}

export interface IService {
    id: number,
    text: string,
}

export interface IIssue {
    value: number | string, // 123
    label: string, // not cooling
}

export interface ISlot {
    available?: boolean,
    label: string,
    value: number | string,
}




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

export interface IGetServicesResponse {
    status: string,
    data: {
        residential: IService[],
        commercial: IService[],
    },
    title: string,
    description: string
}

export interface IGetBrandsRequest {
    query?: string,
    skip: string | number,
    limit: string | number,
    zip?: string | number,
    appliances?: {
        service_id: string | number,
        type: string,
    }[],
}

export interface IGetBrandsResponse {
    status: string,
    data: IBrand[],
    title: string,
    description: string
}

export interface IGetSelectedServicesRequest {
    zip: string | number,
    appliances: IAppliance[],
}

export interface IGetSelectedServicesResponse {
    status: string,
    data: {
        services: ISelectedService[],
        total_fee: number,
    },
    title: string,
    description: string
}


export interface IGetTimeSlotsRequest {
    lead_id?: string,
    zip: string | number,
    date: string,
    timezone: string,
    appliances?: IAppliance[],
    latitude?: string | number | null,
    longitude?: string | number | null,
}

export interface IGetTimeSlotsResponse {
    status: string,
    data: {
        services: ISelectedService[],
        total_fee: number,
    },
    title: string,
    description: string
}


// export type IBookAppointmentRequest = FormData

export interface IBookAppointmentRequest {
    zip?: string | number,
    appliances?: IAppliance[],
    firstname: string,
    lastname: string,
    customer_phone: string | number,
    customer_email?: string,
    address: string | undefined,
    latitude?: string | number | null,
    longitude?: string | number | null,
    city?: string,
    state?: string,
    unit?: string | number,
    order_at?: string,
    time_slot?: string | number,
}

export interface IBookAppointmentResponse {
    status: string,
    title: string,
    description: string
}



export interface ICompleteLeadRequest {
    zip?: string | number,
    firstname: string,
    lastname: string,
    customer_phone: string | number,
    customer_email?: string,
    address: string | undefined,
    latitude?: string | number | null,
    longitude?: string | number | null,
    city?: string,
    state?: string,
    unit?: string | number,
    time_slot?: string | number,
    lead_id?: string | number,
}

export interface ICompleteLeadResponse {
    status: string,
    title: string,
    description: string
}