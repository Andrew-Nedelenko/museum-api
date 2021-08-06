import { DominantResult } from './checkDominant';
import { json2csvConvert, json2xmlConvert } from './jsonConverter';


export const responseBody = async (
    data: DominantResult | string,
    type: 'json' | 'xml' | 'csv'
): Promise<string | DominantResult> => {
    if (type === 'xml') {
        return json2xmlConvert(data as string);
    }
    if (type === 'csv') {
        const csvData = await json2csvConvert(data as DominantResult);
        return csvData;
    }
    return data;
};
