import wsRoomController from '@/controller/wsRoom.controller';
import Router from 'koa-router';

const wsRoomRouter = new Router({ prefix: '/wsRoom' });

// 创建房间的路由
wsRoomRouter.post('/createRoom', wsRoomController.create);

// 获取 WebSocket 服务器地址的路由
wsRoomRouter.get('/wsAddress/:roomId', (req, res) => {
  const { roomId } = req.params;
  const wsAddress = `ws://localhost:3000/room/${roomId}`; // WebSocket 服务器地址
  // res.json({ wsAddress });
});

export default wsRoomRouter;
