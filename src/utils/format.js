export function priceFormat(number) {
    return (
        typeof number === 'number' &&
        number
            .toFixed(3)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    );
}
export const onlyNumber = (input) => {
    var regex = /^\d*$/g;
    return regex.test(Number(input));
};
