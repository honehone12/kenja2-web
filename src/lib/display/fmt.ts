'use strict';

export function fmtItemLen(len: number | null | undefined) {
    if  (!len) {
        return `0 items`;
    } else if (len < 0) {
        throw RangeError("item legth should not be under 0");
    } else if(len === 1) {
        return 'a item';
    } else {
        return `${len} items`;
    }
}
