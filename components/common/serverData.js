async function getData(endpoint) {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const url = `${baseUrl}${endpoint}`;

  console.log("Fetching from:", url); // 🔥 Check if URL is correct

  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
      throw new Error(`Failed to fetch data from ${url}`);
  }

  return res.json();
}

export default getData;
