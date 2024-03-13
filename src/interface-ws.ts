import {
  DanmuMsgTypeEnum,
  ILiveRoom,
  ILiveUser,
  IUser,
  LiveRoomTypeEnum,
} from './interface';

/** websocket连接状态 */
export enum WsConnectStatusEnum {
  /** 已连接 */
  connection = 'connection',
  /** 连接中 */
  connecting = 'connecting',
  /** 已连接 */
  connected = 'connected',
  /** 断开连接中 */
  disconnecting = 'disconnecting',
  /** 已断开连接 */
  disconnect = 'disconnect',
  /** 重新连接 */
  reconnect = 'reconnect',
  /** 客户端的已连接 */
  connect = 'connect',
}

/** websocket消息类型 */
export enum WsMsgTypeEnum {
  /** 用户进入聊天 */
  join = 'join',
  /** 用户进入聊天完成 */
  joined = 'joined',
  /** 用户进入聊天 */
  otherJoin = 'otherJoin',
  /** 用户退出聊天 */
  leave = 'leave',
  /** 用户退出聊天完成 */
  leaved = 'leaved',
  /** 当前所有在线用户 */
  liveUser = 'liveUser',
  /** 用户发送消息 */
  message = 'message',
  /** 房间正在直播 */
  roomLiving = 'roomLiving',
  /** 房间不在直播 */
  roomNoLive = 'roomNoLive',
  getLiveUser = 'getLiveUser',
  updateJoinInfo = 'updateJoinInfo',
  heartbeat = 'heartbeat',
  startLive = 'startLive',
  endLive = 'endLive',
  /** 主播禁言用户 */
  disableSpeaking = 'disableSpeaking',
  /** 主播踢掉用户 */
  kick = 'kick',

  offer = 'offer',
  answer = 'answer',
  candidate = 'candidate',

  msrBlob = 'msrBlob',
}

export interface IWsFormat<T> {
  /** 消息id */
  request_id: string;
  /** 用户socket_id */
  socket_id: string;
  /** 是否是主播 */
  is_anchor: boolean;
  /** 用户信息 */
  user_info?: IUser;
  /** 用户token */
  user_token?: string;
  live_room_id: number;
  data: T;
}

export type WsUpdateJoinInfoType = IWsFormat<{
  live_room_id: number;
  track?: { audio: number; video: number };
  rtmp_url?: string;
}>;

/** 获取在线用户 */
export type WSGetRoomAllUserType = IWsFormat<{
  liveUser: ILiveUser[];
}>;

/** 获取在线用户 */
export type WsGetLiveUserType = IWsFormat<{
  live_room_id: number;
}>;

/** 直播间正在直播 */
export type WsRoomLivingType = IWsFormat<{
  live_room: ILiveRoom;
  anchor_socket_id: string;
}>;

/** 直播间没在直播 */
export type WsRoomNoLiveType = IWsFormat<{
  live_room: ILiveRoom;
}>;

/** ws消息 */
export type WsMessageType = IWsFormat<{
  msgType: DanmuMsgTypeEnum;
  msgIsFile: boolean;
  msg: string;
  sendMsgTime: number;
  live_room_id: number;
}>;

/** 禁言用户 */
export type WsDisableSpeakingType = IWsFormat<{
  request_id?: string;
  /** 被禁言用户socket_id */
  socket_id: string;
  /** 被禁言用户id */
  user_id: number;
  /** 直播间id */
  live_room_id: number;
  /** 禁言时长（单位：秒） */
  duration?: number;
  /** 禁言创建消息 */
  disable_created_at?: number;
  /** 禁言到期消息 */
  disable_expired_at?: number;
  /** 禁言成功 */
  disable_ok?: boolean;
  /** 解除禁言成功 */
  restore_disable_ok?: boolean;
  /** 是否正在禁言 */
  is_disable_speaking?: boolean;
  /** 是否解除禁言 */
  restore?: boolean;
}>;

/** 其他用户加入直播间 */
export type WsOtherJoinType = IWsFormat<{
  live_room: ILiveRoom;
  live_room_user_info: IUser;
  join_user_info?: IUser;
  join_socket_id: string;
}>;

/** 开始直播 */
export type WsStartLiveType = IWsFormat<{
  cover_img: string;
  name: string;
  type: LiveRoomTypeEnum;
  chunkDelay: number;
}>;

/** 用户加入直播间 */
export type WsJoinType = IWsFormat<{
  live_room_id: number;
  socket_id: string;
  live_room: ILiveRoom;
  anchor_info?: IUser;
  user_info?: IUser;
}>;

/** 用户离开直播间 */
export type WsLeavedType = IWsFormat<{
  socket_id: string;
  user_info?: IUser;
}>;

/** 心跳检测 */
export type WsHeartbeatType = IWsFormat<{
  socket_id: string;
}>;

/** msr直播发送blob */
export type WsMsrBlobType = IWsFormat<{
  live_room_id: number;
  blob: any;
  blob_id: string;
  delay: number;
}>;

export type WsOfferType = IWsFormat<{
  sdp: any;
  sender: string;
  receiver: string;
  live_room_id: number;
}>;

export type WsAnswerType = IWsFormat<{
  sdp: any;
  sender: string;
  receiver: string;
  live_room_id: number;
}>;

export type WsCandidateType = IWsFormat<{
  live_room_id: number;
  candidate: RTCIceCandidate;
  receiver: string;
  sender: string;
}>;
