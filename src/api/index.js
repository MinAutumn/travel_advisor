import axios from 'axios';

// has issue when it loads the first time
export const getPlacesData = async (sw, ne) => {
    try {
      const { data: { data } } = await axios.get('https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary', {
        params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng
        },
        headers: {
            'x-rapidapi-key': 'ec9e40a3e2mshb01e831f96569aap1d0e24jsn91ba4112e7c3',
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
        },
      });
  
      return data;
    } catch (error) {
      console.log(error);
    }
  };