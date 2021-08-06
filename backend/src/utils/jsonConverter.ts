import { json2xml } from 'xml-js';
import { json2csvAsync } from 'json-2-csv';
import { DominantResult } from './checkDominant';

export const json2xmlConvert = (data: string): string => {
    return json2xml(data, { compact: true, ignoreComment: true, spaces: 2 });
};

export const json2csvConvert = async (data: DominantResult): Promise<string> => {
    const csvData = await json2csvAsync(data as any);
    return csvData;
};
