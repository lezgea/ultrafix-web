export interface IFileUploadRequest {
    file: FormData,
}

export interface IFileUploadResponse {
    data: {
        id: number,
    },
    description: string,
    status: string,
    title: string,
}
