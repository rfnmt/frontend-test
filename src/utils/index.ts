export function toFa(input?: string | number | null): string {
    if (!(typeof input === 'number' || typeof input === 'string')) {
        return '';
    }
    return (input + '').replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[Number(d)]);
}

export function formatNumberWithCommas(number: number): string {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
