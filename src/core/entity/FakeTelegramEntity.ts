/* eslint-disable no-unused-vars */
import {MessageSubType, UpdateType} from 'telegraf/typings/telegram-types';
import {TelegrafEntity} from '@core/entity/TelegrafEntity';
import {Entity} from '@interface/abstract/Entity';
import {ListenerTypes} from '@type/telegraf.type';
import {Context} from 'telegraf';

export type FakeTelegramOptions = {token: string};

type Listener = {
  type: UpdateType | MessageSubType;
  methods: string;
};

type Listeners = Map<ListenerTypes, Function[]>;

export class TelegrafProvider extends Entity {
  private _telegrafEntity: TelegrafEntity;
  private listeners: Listeners = new Map<ListenerTypes, Function[]>();

  // ------------------------------------------Static Properties|

  private static _instance: TelegrafProvider;

  private constructor() {
    super();
    this._telegrafEntity = TelegrafEntity.getInstance();
  }

  // ------------------------------------------- Public methods|

  /**
   * This class is singleton and you need
   * to use getInstance static method to get
   *
   * This class will be create just once and when ever
   * you call this method the first one will be shared
   * with you.
   */
  public static getInstance() {
    if (!this._instance) {
      this._instance = new this();
    }

    return this._instance;
  }

  public getListenerMethods(type: ListenerTypes): Function[] {
    return this.listeners.get(type) || [];
  }

  /**
   * Register the method for the specific
   */
  public register(type: ListenerTypes, method: Function) {
    if (this.listeners.has(type)) {
      this.getListenerMethods(type).push(method);
    } else {
      this.listeners.set(type, [method]);
    }
  }

  /**
   * Run the telegram and attach listeners
   */
  public run() {
    this._telegrafEntity.run();
    this.attachRegisteredHooks();
  }

  // ------------------------------------------- Private methods|

  private attachRegisteredHooks() {
    const listenerKeys = this.listeners.keys();
    let keyNextResult = listenerKeys.next();

    while (!keyNextResult.done) {
      const key = keyNextResult.value;

      this.getListenerMethods(key).forEach((fn: Function) => {
        this._telegrafEntity.on(key).subscribe((ctx: Context) => {
          fn(ctx);
        });
      });

      keyNextResult = listenerKeys.next();
    }
  }
}
