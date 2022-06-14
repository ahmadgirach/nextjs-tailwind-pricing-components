export const numberFormatter = (num: number | string) => {
    if (typeof num === 'string') {
        num = parseFloat(num)
    }
    const formatted = new Intl.NumberFormat('en-IN').format(num)
    return formatted;
}