import 'reflect-metadata';
import 'module-alias/register';

import {Anonymous} from '@core/entity/Anonymous';

/**
 * @TODO: Clean the code and setup tsyringe container
 * @TODO: Make sure sure specific classes are singleton
 * @TODO: Ability to chain the processes.
 */

const anonymousBot = new Anonymous();
anonymousBot.init();
