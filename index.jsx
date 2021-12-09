/** @jsx jsx */

import * as React from "react";
import { renderToString } from "react-dom/server";
import { css, jsx } from "@emotion/react";

const color = "white";

const App = () => (
    <html>
        <body>
            <div
                css={css`
                    padding: 32px;
                    background-color: hotpink;
                    font-size: 24px;
                    border-radius: 4px;
                    &:hover {
                        color: ${color};
                    }
                `}
            >
                Hover to change color.
            </div>
        </body>
    </html>
);

export default {
    fetch() {
        try {
            const markup = renderToString(<App />);
            return new Response("<!DOCTYPE html>" + markup, {
                status: 200,
                headers: { "Content-Type": "text/html" },
            });
        } catch (error) {
            console.log("error", error);
            return new Response(e.message || e.toString(), {
                status: 200,
            });
        }
    },
};
