import type { Controller } from "@t8/webapp-core";

export const render: Controller = () => {
  return (_req, res) => {
    res.send(
      "<!DOCTYPE html>" +
        '<html><head><meta charset="utf-8">' +
        '<meta name="viewport" content="width=device-width">' +
        "<title>Blank App</title>" +
        '<link rel="stylesheet" href="/_main/index.css">' +
        '<link rel="icon" type="image/svg+xml" href="/favicon.svg">' +
        '</head><body><div class="layout">' +
        "<main><h1>Blank App</h1>" +
        "<p>Lorem ipsum dolor tincidunt vitae suscipit nullam</p>" +
        "</main><footer><hr><p><em>@t8/blank-app</em></p></footer>" +
        "</div></body></html>\n",
    );
  };
};
