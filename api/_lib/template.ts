import { sanitizeHtml } from "./sanitizer";
import { ParsedRequest } from "./types";
import slugify from "slugify";

function getCss() {
  return `
    * {
        margin: 0;
        padding: 0;
        border-box: box-sizing;
    }
    body {
        background: rgb(3, 5, 24);
        height: 100vh;
        display: flex;
    }
    
    .heading {
        font-family: 'Source Sans Pro', sans-serif;
        color: rgba(243,244,246);
        font-size: 7vw;
        font-weight: 700;
        line-height: 1;
    }

    .container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 6rem;
    }

    .avatar {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        border: 5px solid rgba(243,244,246);
        margin-right: 50px;
    }

    .name {
        font-family: 'Open Sans Pro', sans-serif;
        color: rgba(243,244,246);
        font-size: 1.8vw;
        font-weight: 700;
    }

    .link {
        font-family: 'Open Sans Pro', sans-serif;
        color: rgb(136, 153, 166);
        font-size: 1.8vw;
        font-weight: 700;
        margin: 0.8rem 0;
    }

    .twitter {
        font-family: 'Open Sans Pro', sans-serif;
        color: #f231a5;
        font-size: 1.8vw;
        font-weight: 700;
    }

    .box-info {
        display: flex;
        align-items: center;
    }
    `;
}

export function getHtml(parsedReq: ParsedRequest) {
  const { text } = parsedReq;
  return `<!DOCTYPE html>
<html>
    <meta charset="utf-8">
    <title>Generated Image</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@700&display=swap" rel="stylesheet">
    <style>
        ${getCss()}
    </style>
    <body>
        <div class="container">
            <h1 class="heading">${sanitizeHtml(text)}</h1>

            <div class="box-info">
                <img
                    src="https://pbs.twimg.com/profile_images/1293615309841211392/njVpkDdg_400x400.jpg"
                    alt="Willian Justen"
                    class="avatar"
                />
                <div class="info">
                    <p class="name">Willian Justen</p>
                    <p class="link">willianjusten.com.br/${slugify(text, {
                      lower: true,
                    })}</p>
                    <p class="twitter">
                        twitter.com/Willian_justen
                    </p>
                </div>
            </div>
        </div>
    </body>
</html>`;
}
