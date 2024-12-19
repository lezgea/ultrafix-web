
export interface IAppliance {
    service_id: string | number,
    type: string,
    brand: string | number | null,
    problem: string,
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
