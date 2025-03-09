
export interface IReview {
    id: number | string,
    author_name: string,
    author_url: string,
    branch_id: number,
    language: string,
    profile_photo_url: string,
    rating: number,
    text: string,
    text_length: number,
    comment_at: number,
    time_description: string,
}


// REQUEST TYPES

export interface IGetLocationReviewsRequest {
    location_id: number,
    skip?: number,
    limit?: number,
}



// RESPONSE TYPES

export interface IGetLocationReviewsResponse {
    status: string,
    data: IReview[],
    reviews_count: number,
    skip: number,
    limit: number,
}