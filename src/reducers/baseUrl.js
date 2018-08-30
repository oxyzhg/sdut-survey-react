const baseUrl = {
  serve: 'https://api.youthol.cn/api',
  localhost: 'http://localhost:5000/api'
};

export default (state = baseUrl.serve) => state;
