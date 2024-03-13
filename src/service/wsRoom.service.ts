
import { IWsRoom } from '@/interface';
import wsRoomModel from '@/model/wsRoom.model';

class WsRoomService {

    async create({ id, name, description }: IWsRoom) {
        const result = await wsRoomModel.create({
            id, name, description
        });
        return result;
    }
}

export default new WsRoomService();
