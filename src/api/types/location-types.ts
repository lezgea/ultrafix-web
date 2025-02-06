
export interface IState {
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
    data: IState[],
}


export interface ICity {
    id: number | string,
    name: string,
    state_short: string,
    state_full: string,
    value: string,
    image: string
}

export interface ICitiesListRequest {
    state: string,
}

export interface ICitiesListResponse {
    data: ICity[],
}


export interface ICitiesInfoRequest {
    state: string,
    city: string,
}

export interface ICitiesInfoResponse {
    // data: ICity[],
}