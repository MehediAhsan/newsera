async function getData(url) {
    const res = await fetch(url, {
      // cache: 'force-cache',
      // cache: 'no-store',
      // next: {
      //   revalidate: 30,
      // },
    });
  
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }
  
    return res.json();
  }
  
  export default getData;