import { json2xml } from 'xml-js';

export const json2xmlConvert = (data: string): string => {
    return json2xml(data, { compact: true, ignoreComment: true, spaces: 2 });
};
