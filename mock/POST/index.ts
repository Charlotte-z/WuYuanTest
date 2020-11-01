export default {
  'POST /api/users': (req, res) => {
    // 添加跨域请求头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end('OOO');
  },
};
