import {Context} from 'telegraf';
import {listener} from '@shared/decorators/listener.decorator';
import {TelegrafProvider} from '@core/entity/FakeTelegramEntity';
import {Entity} from '@interface/abstract/Entity';

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
  }

  @listener('message')
  onMessage(ctx: Context) {
    console.log({
      type: 'message',
      from: ctx.from,
    });
  }

  public init() {
    this._fakeTelegram.run();
  }
}
