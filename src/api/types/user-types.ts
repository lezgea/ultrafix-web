export interface IContactRequest {
    name: string;
    phone: string;
    address: string;
    message?: string;
}

export type ContactResponse = string

