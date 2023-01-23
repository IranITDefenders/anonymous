import {config as importEnvs} from 'dotenv';
importEnvs();

import 'reflect-metadata';
import 'module-alias/register';

import {Anonymous} from '@core/entity/Anonymous';

// /**
//  * @TODO: Clean the code and setup tsyringe container
//  * @TODO: Make sure sure specific classes are singleton
//  * @TODO: Ability to chain the processes.
//  * @TODO: Make changes on database.
//  * @TODO: Add sink package to add subscribers to it.
//  */

const anonymousBot = new Anonymous();
anonymousBot.init();
