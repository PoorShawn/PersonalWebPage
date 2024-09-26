import mitt, { Emitter as MittEmitter } from 'mitt';

type EventType = {
  'sendRenderFile': RenderFileEvent;
  // 你可以在这里添加其他事件类型
};

export interface RenderFileEvent {
  renderFile: string;
}

export type Emitter<T extends Record<string, any>> = MittEmitter<T>;

export const emitter: Emitter<EventType> = mitt<EventType>();