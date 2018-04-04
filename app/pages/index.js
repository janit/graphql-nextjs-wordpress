import React from "react";
import Link from "next/link";

var client = require("graphql-client")({
    url: "https://wp.malloc.fi/graphql/"
});

export default class Index extends React.Component {
    static async getInitialProps() {

        const query = `

        {
            myArticles: posts {
                edges {
                    node {
                        slug
                        title
                    }
                }
            }

            myTags:tags {
                edges {
                    node {
                        id
                        name
                    }
                }
            }
        }

        `;

        return await client.query(query, {});
    }

    render(){

        const articles = (this.props.data.myArticles.edges);
        const tags = (this.props.data.myTags.edges);

        return <main>
            <h1>All articles</h1>
            <ul>
                {articles.map(article => {
                    return <li key={article.node.id}>
                        <Link
                            href={"/post?slug=" + article.node.slug}
                        ><a>
                        {article.node.title}
                        </a></Link>
                    </li>
                })}
            </ul>
            <h1>All tags</h1>
            <ul>
                {tags.map(tag => {
                    return <li key={tag.id}>{tag.node.name}</li>
                })}
            </ul>

        </main>
    }
}