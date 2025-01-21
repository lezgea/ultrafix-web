export interface IContactRequest {
    name: string;
    phone: string;
    address: string;
    message?: string;
}

export type ContactResponse = string


export interface IApplyRequest {
    fullname: string;
    nickname: string;
    ssn: string;
    phone: string;
    email: string;
    address: string;
}

export type ApplyResponse = string


export interface ILoginRequest {
    email: string,
    password: string,
}

export interface ILoginResponse {
    status: string,
    data: {
        token: string,
        user: {
            id: number,
            role: string,
            name: string,
            email: string,
            phone: number,
            remote_tech: number,
            payment_percent: number,
            address: number,
            full_name: string
        }
    },
    title: string,
    description: string
}
