const fetchData = async url => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error, status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.log(error.message);
  }
};

export default fetchData;
