import * as webpack from 'webpack';
import { ITemplateEntry } from '../types/ITemplateEntry';

export default (pages: ITemplateEntry[] = []): webpack.Entry => {
    return pages.reduce((memo: webpack.Entry, page: ITemplateEntry) => {
        const { entryname, pathname } = page;

        return { ...memo, [entryname]: pathname };
    }, {});
};
