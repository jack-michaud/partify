import { Recommendation } from "../types";

export const removeRecommendation = async (recommendationId: string) => {
  const resp = await fetch(`${process.env.API_URL}/recommendations/${recommendationId}/`, {
    method: 'DELETE',
    credentials: 'include',
  })
}

export const getRecommendations = async (): Promise<Recommendation[]> => {
  const recommendations = await fetch(`${process.env.API_URL}/recommendations/`, {
    credentials: 'include'
  })

  return recommendations.json();
}

export const makeRecommendation = async (trackId: string, forUserId: string): Promise<Recommendation> => {
  const recommendation = await fetch(`${process.env.API_URL}/recommendations/`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      trackId, forUserId
    })
  })
  return await recommendation.json();
}
