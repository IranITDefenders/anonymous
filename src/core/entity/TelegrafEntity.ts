import {MessageSubType, UpdateType} from 'telegraf/typings/telegram-types';
import {Entity} from '@interface/abstract/Entity';
import {Observable, Subscriber} from 'rxjs';
import {APP_CONFIG} from '@constant/Config';
import {Context, Telegraf} from 'telegraf';

export class TelegrafEntity extends Entity {
  private _telegraf: Telegraf;
  private static _instance: TelegrafEntity;

  private constructor(_token: string) {
    super();
    this._telegraf = new Telegraf(_token);
  }

  public static getInstance() {
    if (!this._instance) {
      this._instance = new this(APP_CONFIG.token);
    }

    return this._instance;
  }

  public on(target: UpdateType | MessageSubType): Observable<Context> {
    return new Observable((subscriber: Subscriber<Context>) => {
      this._telegraf.on(target, (ctx: Context) => {
        subscriber.next(ctx);
      });
    });
  }

  public run() {
    this._telegraf.launch();
    process.once('SIGINT', () => this._telegraf.stop('SIGINT'));
    process.once('SIGTERM', () => this._telegraf.stop('SIGTERM'));
  }

  private stop() {
    this._telegraf.stop();
  }
}
