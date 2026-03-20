// Minimal game representation, used for local collection storage
export interface CollectionGame{
    id: number
    name: string
    slug: string
    background_image: string
}

// Full game object as returned by the RAWG API
export interface Game extends CollectionGame {
    released: string
    tba: boolean
    rating: number
    rating_top: number,
    description: string
}
