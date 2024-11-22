import axios from 'axios';

type ImageData = {
  id: number;
  urls: {
    small: string;
    regular: string;
  };
  description: string;
};

type DataResponse = {
  results: ImageData[];
  total_pages: number;
};

const fetchImages = async (query: string, page: number) => {
  const response = await axios.get(`https://api.unsplash.com/search/photos`, {
    params: {
      query,
      page,
      per_page: 9,
      client_id: 'alWp6hurEvK-MK92m5HZv1-1euEpnmixSMj2njOszLo',
    },
  });
  return response.data;
};

export default fetchImages;
