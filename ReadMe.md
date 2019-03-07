# GraphQL

## Quick Start

```bash
yarn run server
cd client
yarn start
```

--------

## Tips to build the app

### SERVER SIDE
--------

### express-graphql Setup: 

[express-graphql](https://github.com/graphql/express-graphql)

(server.js, schema.js)

### Cors

 ```bash
 yarn add cors
 ```


### CLIENT SIDE
--------

### Apollo

[Apollo-Installation](https://www.apollographql.com/docs/react/essentials/get-started.html)

```bash 
yarn add apollo-boost react-apollo graphql
```

### Proxy

Feature: Avoid add localhost in uri, and host to the server localhost url

in package.json

```json
"proxy": "http://localhost:5000"
```


### Bootswatch

Bootstrap

[bootswatch](https://bootswatch.com/cyborg/)



### classnames, moment, react-moment

[classnames](https://github.com/JedWatson/classnames)

Feature: A simple JavaScript utility for conditionally joining classNames together.

[Moment](https://momentjs.com/)

Feature: Parse, validate, manipulate, and display dates and times in JavaScript.


```bash
yarn add classnames moment react-moment
```