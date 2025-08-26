import type {Controller} from '@t8/webapp';

export const render: Controller = () => {
    return (req, res) => {
        let {nonce} = req.ctx;

        res.send(
            '<!DOCTYPE html>' +
            '<html><head><meta charset="utf-8"/>' +
            '<meta name="viewport" content="width=device-width"/>' +
            '<link type="image/x-icon" rel="icon" href="/favicon.svg"/>' +
            '<title>Intro</title>' +
            `<style${nonce ? ` nonce="${nonce}"` : ''}>` +
            '.layout { max-width: 36em; margin: 0 auto; }</style>' +
            '</head><body><div class="layout">' +
            '<main><h1>Intro</h1>' +
            '<p>This is demo content. Lorem ipsum dolor, ' +
            'quam velit, tincidunt vitae suscipit nullam.</p>' +
            '</main><footer><hr><p><em>@t8/webapp-blank</em></p></footer>' +
            '</div></body></html>\n',
        );
    };
};
