"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkOneEdit = (s1, s2) => {
    if (s2.length === (s1.length) + 1 || s2.length === (s1.length) - 1 || s1.length === s2.length) {
        const doesS1Contain = s1.includes(s2);
        if (doesS1Contain) {
            return true;
        }
        else {
            const doesS2Contain = s2.includes(s1);
            if (doesS2Contain) {
                return true;
            }
            else {
                return false;
            }
        }
    }
    else {
        return false;
    }
};
