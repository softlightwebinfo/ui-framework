export const Sizes = {
    xs: 'xs',
    s: 's',
    sm: 'sm',
    m: 'm',
    l: 'l',
    xl: 'xl',
    xxl: 'xxl',
};

export const GenerateSize = (size: string) => Sizes[size];
// @ts-ignore
export const GenerateSizeObject = (name: string) => Object.keys(Sizes).reduce((total, item) => {
    total[item] = `${name}--${item}`;
    return total;
}, {});
