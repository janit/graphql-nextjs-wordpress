import React from "react";
import Link from "next/link";
import renderHTML from 'react-render-html';

var client = require("graphql-client")({
    url: "http://wp.malloc.fi/graphql/"
});

export default class Index extends React.Component {
    static async getInitialProps({ query: { slug } }) {

        const query = `

          {
            myArticle: postBy(slug:"${slug}") {
              title
              content
            }
          }

        `;

        return await client.query(query, {});
    }

    render(){

        const article = (this.props.data.myArticle);

        return <main>
            <Link href="/"><a href="/">home</a></Link>
            <h1>{article.title}</h1>
            {renderHTML(article.content)}
        </main>
    }
}