
export interface IService {
    id: number | string,
    name: string,
    state_short: string,
    value: string,
    icon: string

}

export interface IStatesListRequest {
    // city: string,
}

export interface IStatesListResponse {
    data: IService[],
}