// html skeleton provider
export default function template(
    slice,
    initialState = {},
    title,
    content = ''
) {
    const styles = `
        <link href="${slice}/main.css" rel="stylesheet">
    `;
    const scripts = `
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
                ${styles}
            </head>
            <body>
                <div class="content">
                    <div id="app" class="wrap-inner">
                    ${content}
                    </div>
                </div>
                ${scripts}
            </body>
        </html>
    `;

    return page;
}
