
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

export interface IGetBrandsResponse {
    status: string,
    data: IBrand[],
    title: string,
    description: string
}





// ---------------------------------

export interface IBrandNEW {
    id: number | string, // 12
    title: string, // LG
}

export interface IIssueNew {
    id: number | string, // 123
    title: string, // not cooling
}

export interface IServiceNEW {
    id: number | string, // 1
    title: string, // Refrigerator
    type: string, // Residential or Commercial
    fee: number | string, // $80
    brands: IBrandNEW[],
    issues: IIssueNew[],
}

export interface IGetBrandsResponseNEW {
    status: string,
    data: IServiceNEW[],
    title: string,
    description: string
}

export interface IGetBrandsResponseNEW2 {
    status: string,
    data: {
        services: [
            {
                id: number | string, // 1
                title: string, // Refrigerator
                type: string, // Residential or Commercial
                fee: number | string, // $80
                // max length should be 6 (the last one "Other")
                issues: [
                    {
                        id: number | string, // 123
                        title: string, // not cooling
                    },
                    {
                        id: number | string, // 123
                        title: string, // noising
                    },
                ]
            },
        ],
        total_fee: number | string, // $80
    },
    title: string,
    description: string
}

// ---------------------------------

