export default{
    'POST /api/users/create': (req, res) => {
        // 添加跨域请求头
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(400).send({ error: '啊哈哈哈' })
      },
}