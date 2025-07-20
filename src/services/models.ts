/* eslint-disable no-param-reassign */
import type { Models } from '../types/entities.js';

import modelsStaticJSON from '../../data/models.json' assert { type: 'json' };

const modelsStaticData: Models = modelsStaticJSON;

export function getModels() {
	console.log('getModels');

	const result = modelsStaticData;

	return result;
}
