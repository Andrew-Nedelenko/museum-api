import { getColorFromURL } from 'color-thief-node';

type DominantResult = {
    rgb: string;
    dominantColor: string;
};

const calculatePureDominant = (colors: number[]) => {
    const colorsRGB = ['red', 'green', 'blue'];
    const colorValue = colors
        .map((item, index) => ({ item, index: colorsRGB[index] }))
        .reduce((acc, val) => (acc.item > val.item ? acc : val));
    return {
        rgb: `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`,
        dominantColor: colorValue.index,
    };
};

export const checkDominant = async (
    imgUrl: string
): Promise<DominantResult> => {
    const dominantColor = await getColorFromURL(imgUrl);
    return calculatePureDominant(dominantColor);
};
