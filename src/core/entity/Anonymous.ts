import {Context} from 'telegraf';
import {Entity} from '@interface/abstract/Entity';
import {listener} from '@shared/decorators/listener.decorator';
import {TelegrafProvider} from '@core/entity/FakeTelegramEntity';
import {forceReply} from 'telegraf/typings/markup';

export class Anonymous extends Entity {
  private _fakeTelegram: TelegrafProvider;

  constructor() {
    super();

    this._fakeTelegram = TelegrafProvider.getInstance();
  }

  @listener('sticker')
  onSticker(ctx: Context) {
    console.log({
      type: 'sticker',
      from: ctx.from,
    });

    ctx.reply('You send an sticker');
  }

  @listener('message')
  onMessage(ctx: Context) {
    console.log({
      type: 'message',
      from: ctx.from,
    });

    ctx.reply(`${ctx.from?.username}, You send a message :)`);
  }

  public init() {
    this._fakeTelegram.run();
  }
}
