
export interface IFaq {
    id: number | string,
    title: string,
    description: string,
}

export interface IFaqsListRequest {
    city: string,
}

export interface IFaqsListResponse {
    data: IFaq[],
}