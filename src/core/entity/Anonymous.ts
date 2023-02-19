import {Context} from 'telegraf';
import {Entity} from '@interface/abstract/Entity';
import {listener} from '@shared/decorators/listener.decorator';
import {TelegrafProvider} from '@core/entity/FakeTelegramEntity';

export class Anonymous extends Entity {
  private _fakeTelegram: TelegrafProvider;

  constructor() {
    super();

    this._fakeTelegram = TelegrafProvider.getInstance();
  }

  @listener('sticker')
  onSticker(ctx: Context) {
    ctx.reply('You send an sticker');
  }

  @listener('message')
  onMessage(ctx: Context) {
    ctx.reply(`${ctx.from?.username}, You send a message :)`);
  }

  public init() {
    this._fakeTelegram.run();
  }
}
