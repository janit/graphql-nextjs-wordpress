# GraphQL and Next.js for WordPress devs

<center><small>WordPress Helsinki Meetup<br />March 4th 2018 - Jani Tarvainen</small></center>

---

## About me, Jani Tarvainen

<figure class="about">
<img src="https://janit.iki.fi/shit/bigmug.png">
Personal branding<hr />
@velmu
</figure>
 - Web development for 20y+
 - Interested in all things<br/>tech and around it
 - Currently working mostly<br/>with content thingamajigs
 - Working knowledge of<br />TS/JS and Symfony/PHP
 - Day job at <a href="https://ez.no">eZ Systems</a>,<br/> night job at <a href="https://malloc.fi">Malloc</a>

---

## GraphQL and Next.js

- <a href="https://graphql.org">GraphQL</a> &mdash; kudos <a href="https://facebook.com">FB</a> + Community
  - Transfer protocol + Query Language
  - An alternative to REST, but more defined
  - Independent of backend technology
- <a href="https://github.com/zeit/next.js/">Next.js</a> &mdash; kudos <a href="http://zeit.co">Zeit</a> + Community
  - A Universal JavaScript framework
  - Runs in the browser and server (with Node.js)
  - Templating using React.js
- GraphQL + Next.js
  - A nice combo for decoupled app/site building
  - We'll see how it works soon enough

--

## GraphQL and PHP

- GraphQL reference implementation in JavaScript
- Two mature GraphQL libraries for PHP
  - <a href="https://github.com/webonyx/graphql-php">WebOnyx GraphQL library</a>
  - <a href="https://github.com/Youshido/GraphQL">Youshido GraphQL library</a>
- Both solid and feature complete in my experience
- Please don't write your own GraphQL library!

--

## GraphQL and WordPress
- WordPress does not ship with GraphQL support
- WPGraphQL plugin adds GraphQL support
  - Uses the WebOnyx library, stable foundations
  - Good coverage from what I explored
  - eZ to use &mdash; even a WP noob could do it
  - Open for custom API extensions
  - More: https://wpgraphql.com
- There are others, but this worked great for me

---

## WordPress and Next.js

- Two independent technologies
- Completely decoupled:
  - Next.js the presentation framework
  - WordPress the data source
- GraphQL is the common ground
- A solid foundation for <a href="https://malloc.fi/pwas-fulfill-promise-of-iphone-for-web-developers">PWA</a>s

--

## Example app walkthrough

- Features
  - List posts on front page
  - Open individual post
- Walkthrough
  - WPGraphQL API
  - Next.js core API
  - Index view
  - Post view
- View the sauce:
  - https://github.com/janit/graphql-nextjs-wordpress/tree/master/app

---

# Hot or not

--

## Hot

- No compromise SEO
- A fresh approach, learn new things
- GraphQL syntax is legi… ble
- Not tied to any system

--

## Not hot

- Lose all the WP sitebuilding bonuses
- WPGraphQL plugin compatibility?
- Added complexity… for what?
- It's fair to say GraphQL is overengineered

---

## Closing links

 - <a href="http://graphql.org/users/">GraphQL widely deployed at GitHub…</a>
 - <a href="https://react-etc.net/entry/who-is-using-next-js">Next.js used by Docker, Magic Leap</a>
 - Next.js Alternatives:
  - <a href="">After.js for React users</a>
  - <a href="https://react-etc.net/entry/next-js-vs-nuxt-js">Nuxt.js for Vue.js users</a>
 - GraphQL platforms:
  - <a href="
 https://github.com/graphcool/graphcool-framework">GraphCool Framework</a>
  - <a href="https://react-etc.net/entry/prisma-is-a-database-agnostic-graphql-api-layer">Prisma</a>
  -  <a href="https://react-etc.net/entry/postgraphile-creates-a-graphql-api-from-a-postgresql-schema">PostGraphile</a>
 - <a href="https://malloc.fi/building-decoupled-sites-and-apps-with-graphql-and-next-js">Sites and Apps with GraphQL and Next.js</a>

---

# Thank you

- Questions?