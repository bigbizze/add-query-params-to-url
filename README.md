# add-query-params-to-url

Lightweight ( < 1kb) helper to add query parameters to a url GET request.

usage:

```
const addParams = require('add-query-params-to-url');
// or
import addParams from 'add-query-params-to-url'

const params = {
    auth: 'bearer',
    token: '12345',
    username: 'ynautwobbuffet',
    password: '42069'
};

const url = "https://nextstrain.org/ncov";

fetch(addParams(params, url), {
    method: 'GET'
})

```

