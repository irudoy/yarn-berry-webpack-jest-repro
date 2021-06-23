const webpack = require('webpack');

test('simple', () => {
    expect(
        webpack({
            entry: './main.js'
        })
    ).not.toThrow();
});
