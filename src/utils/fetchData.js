

export const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c41547fb29msh8b7f897533807f9p1102c6jsndddcbb881c3c',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};

export const youtubeOptions = {
	method: 'GET',
	headers: {
	  'X-RapidAPI-Key': 'c37c643b3bmsh1281ecfdbf4d8eap14b846jsn57be09a46231',
	  'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
	}
  };
  

export const fetchData = async(url, options) => {
  const res = await fetch(url, options);
  const data = await res.json()
  return data;

}