import * as webpack from 'webpack';
import { ITemplateEntry } from '../types/ITemplateEntry';

export default (entries: ITemplateEntry[] = []): webpack.Entry => {
    return entries.reduce((memo: webpack.Entry, entry: ITemplateEntry) => {
        const { entryname, pathname } = entry;

        return { ...memo, [entryname]: pathname };
    }, {});
};
