export default {
  // 支持自定义函数，API 参考 express@4
  'GET /api/users/contentMenu': (req, res) => {
    // 添加跨域请求头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end({
      menu: [
        '动漫',
        '音乐',
        '电影',
        '直播',
        '鬼畜',
        '游戏',
        '动漫',
        '音乐',
        '电影',
        '直播',
        '鬼畜',
        '游戏',
        '动漫',
        '音乐',
        '电影',
        '直播',
        '鬼畜',
        '游戏',
      ],
    });
  },
};
