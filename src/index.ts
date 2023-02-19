import {config as importEnvs} from 'dotenv';
importEnvs();

import 'reflect-metadata';
import 'module-alias/register';
import bootstrap from './bootstrap';

bootstrap();
