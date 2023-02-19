import {TelegrafProvider} from '@core/entity/FakeTelegramEntity';
import {DecoratorType} from '@type/decorator.type';
import {ListenerTypes} from '@type/telegraf.type';

const provider = TelegrafProvider.getInstance();

/**
 * ## Listener
 * This decorator will injects the income message from user
 */
export const listener = function (type: ListenerTypes): DecoratorType {
  return function (target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
    provider.register(type, descriptor.value); // Register method
  };
};
