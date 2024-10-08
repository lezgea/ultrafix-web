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

