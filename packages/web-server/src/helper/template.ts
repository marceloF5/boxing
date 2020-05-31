import { ITemplate } from '../types/ITemplate';

export const template = (templateContent: ITemplate) => {
    const { slice, html, initialState, title } = templateContent;

    const cssFiles = `
        <link href="slice-${slice}.client.css" rel="stylesheet">
    `;
    const jsFiles = `
        <script>
            window.__slice-${slice}__ = ${JSON.stringify(initialState)}
        </script>
        <script src="slice-${slice}.client.80daa506b054d811c677.js" ></script>
    `;

    const page = `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="utf-8">
                <title>${title}</title>
                ${cssFiles}
            </head>
            <body>
                <div id="slice-${slice}">
                    ${html}
                </div>

                ${jsFiles}
            </body>
        </html>
    `;

    return page;
};
