import { Context } from 'koa';
import { curly } from 'node-libcurl';
import { env } from '../config/env';
import { checkDominant } from '../utils/checkDominant';
import { responseBody } from '../utils/response.body';

export const pictureController = async (ctx: Context): Promise<void> => {
    const { id, format = 'json' } = ctx.params;
    const { data } = await curly.get(
        `${env('MUSEUM_API_URL')}public/collection/v1/objects/${id || 12345}`,
        { timeout: 5 }
    );

    const { objectID, primaryImage } = data;

    const color = await checkDominant(primaryImage).catch(() => undefined);

    const responseData = {
        objectID,
        primaryImage,
        ...(color && color),
    };

    ctx.body = responseBody(responseData, format);
};
