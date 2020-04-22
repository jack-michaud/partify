import { Recommendation } from "../types";

export const removeFeatured = async (featuredId: string) => {
  await fetch(`${process.env.API_URL}/featured/${featuredId}/`, {
    method: 'DELETE',
    credentials: 'include',
  })
}

export const getFeatured = async (): Promise<Recommendation[]> => {
  const featured = await fetch(`${process.env.API_URL}/featured/`, {
    credentials: 'include'
  })

  return featured.json();
}

export const makeFeatured = async (trackId: string): Promise<Recommendation> => {
  const featured = await fetch(`${process.env.API_URL}/featured/`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      trackId
    })
  })
  return await featured.json();
}
