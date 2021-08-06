import { json2xmlConvert } from './json2xml';

export const responseBody = (
    data: any,
    type: 'json' | 'xml' | 'csv'
): string => {
    if (type === 'xml') {
        return json2xmlConvert(data);
    }
    if (type === 'csv') {
        return 'csv convert';
    }
    return data;
};
