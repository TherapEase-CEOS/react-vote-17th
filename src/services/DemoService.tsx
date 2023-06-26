import HTTP from '../utils/HTTP';

const DemoService = {
  getServices: async () => {
    try {
      const response = await HTTP.get('/candidates');

      if (response.status === 200) {
        return response.data.candidates;
      }
    } catch (err) {
      console.log(err);
      throw err;
    }

    return null;
  },
  vote: async (body: { candidateId: string }) => {
    try {
      const response = await HTTP.post('/pollDemo', body);
      console.log(response);
      return response;
    } catch (err) {
      console.log(err);
      throw err;
    }

    return null;
  },
  getVoteResults: async () => {
    try {
      const response = await HTTP.get('/demoResult');

      if (response.status === 200) {
        return response.data.candidates;
      }
    } catch (err) {
      console.log(err);
      throw err;
    }

    return null;
  },
};

export default DemoService;
