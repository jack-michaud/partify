
export const sendCode = async (code: string): Promise<void> => {
  const resp = await fetch(process.env.API_URL + '/auth-spotify', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      code
    })
  })
  if (resp.status != 200) {
    throw 'Unable to authenticate';
  }
}

export const fetchMe = async () => {
  const resp = await fetch(process.env.API_URL + '/users/me', {
    credentials: 'include',
  });
  if (resp.status != 200) {
    throw 'Unable to authenticate';
  }
  return await resp.json();
}
