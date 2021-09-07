const fetchAPI = async (URL) => {
  try {
    const request = await fetch(URL);
    const data = await request.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchAPI;
