

export const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c37c643b3bmsh1281ecfdbf4d8eap14b846jsn57be09a46231',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};
  

export const fetchData = async(url, options) => {
  const res = await fetch(url, options);
  const data = await res.json()
  return data;

}