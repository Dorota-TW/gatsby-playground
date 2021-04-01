# Gatsby playgorund

## 🚀 Quick start

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd gatsby-playground/
    gatsby develop
    ```

2.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._

## 💻 Tasks to complete

1. In `gatsby-node.js`, use `fetchCatFacts` function to fetch cat facts and programmatically create a new page for each fact.

   1. Page path should be `/facts/:factId/`
   2. pass fetched fact to the page through the page context
   3. access the fact on the page through the `props` and display it

2. On the home page, use GraphQL to fetch data about the files in your project. The fields you will need are `relativePath`, `prettySize`, `extension` and `birthTime`. Start with console logging data from the query and then display it in a table. Here's the HTML for the table:

```
<div>
  <h1>My Site's Files</h1>
  <table>
    <thead>
      <tr>
        <th>relativePath</th>
        <th>prettySize</th>
        <th>extension</th>
        <th>birthTime</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>
</div>
```
