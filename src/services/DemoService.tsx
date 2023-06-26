import HTTP from '../utils/HTTP';

const DemoService = {
  getServices: async () => {
    try {
      const response = await HTTP.get('/candidates');

      if (response.status == 200) {
        return await response.data.candidates;
      }
    } catch (err) {
      console.log(err);
      throw err;
    }

    return null;
  },
};

export default DemoService;
