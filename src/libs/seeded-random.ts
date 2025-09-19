export function seededRandom(seedStr: string) {
    const m = 0x80000000; // 2^31
    const a = 1103515245;
    const c = 12345;

    let seed = stringToNumber(seedStr);
    seed = seed % m;

    return function (): number {
        seed = (a * seed + c) % m;
        return seed / m;
    };
}


function stringToNumber(str: string): number {
    let result = 0;

    for (let i = 0; i < str.length; i++) {
        result += str.charCodeAt(i) * Math.pow(31, str.length - 1 - i);
    }

    return result;
}