"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (entries = []) => {
    return entries.reduce((memo, entry) => {
        const { entryname, pathname } = entry;
        return { ...memo, [entryname]: pathname };
    }, {});
};
//# sourceMappingURL=getEntries.js.map