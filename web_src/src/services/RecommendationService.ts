import { Recommendation } from "../types";

export const getRecommendations = async (): Promise<Recommendation[]> => {
  const recommendations = await fetch(`${process.env.API_URL}/recommendations/`, {
    credentials: 'include'
  })

  return recommendations.json();
}
