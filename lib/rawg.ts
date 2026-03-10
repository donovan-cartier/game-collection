"use server"

const API_KEY = process.env.RAWG_API_KEY
const BASE_URL = "https://api.rawg.io/api"

export async function fetchGames(search: string = "") {
    const response = await fetch(`${BASE_URL}/games?key=${API_KEY}&search=${search}`)
    const data = await response.json()
    return data.results
}

export async function fetchGameDetails(slug: string) {
    const response = await fetch(`${BASE_URL}/games/${slug}?key=${API_KEY}`)
    const data = await response.json()
    return data
}