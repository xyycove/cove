export async function request(url: string, options?: RequestInit) {
  const config = {
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers || {}),
    },
    ...options,
  };
  let res = await fetch(url, config);

  if (!res.ok) {
    throw new Error(`请求失败：${res.status}`);
  }
  return res.json();
}
