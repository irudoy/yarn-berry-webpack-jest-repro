const webpack = require('webpack');

test('simple', () => {
    expect(
        webpack({
            resolve: {
                plugins: [require('pnp-webpack-plugin')],
            },
        })
    ).not.toThrow();
});
