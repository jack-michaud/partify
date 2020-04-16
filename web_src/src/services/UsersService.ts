export const getFriends = async () => {
  const resp = await fetch(`${process.env.API_URL}/users/`, {
    credentials: 'include'
  });
  return resp.json();
};
