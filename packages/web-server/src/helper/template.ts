import { ITemplate } from '../types/ITemplate';

export const template = (templateContent: ITemplate) => {
    const { slice, html, initialState, title } = templateContent;

    const cssFiles = `
        <link href="${slice}/main.css" rel="stylesheet">
    `;
    const jsFiles = `
        <script>
            window.__slice-${slice}__ = ${JSON.stringify(initialState)}
        </script>
        <script src="${slice}/main.js"></script>
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
                <div class="wrapper">
                    ${html}
                </div>
                ${initialState}
                ${jsFiles}
            </body>
        </html>
    `;

    return page;
};
