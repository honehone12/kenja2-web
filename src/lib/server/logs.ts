'use strict';

import {pino} from "pino";

/*
=========== pino's default level mapping ===========

Level | trace | debug | info | warn | error | fatal
Value | 10    | 20    | 30   | 40   | 50    | 60
*/

const logs = pino();
logs.level = 'info';

export default logs;
