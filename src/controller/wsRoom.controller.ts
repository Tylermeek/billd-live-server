import { ParameterizedContext } from 'koa';

import successHandler from '@/app/handler/success-handle';
import { IWsRoom } from '@/interface';
import wsRoomService from '@/service/wsRoom.service';

class WsRoomController {
    async create(ctx: ParameterizedContext, next) {
        const { id, name, description, }: IWsRoom = ctx.request.body;
        await wsRoomService.create({
            id, name, description,
        });
        successHandler({ ctx });
        await next();
    }
}

export default new WsRoomController();
