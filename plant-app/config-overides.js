module.exports = function override(config){
    const fallback = config.resolve.fallback || {};

    Object.assign(fallback, {
        path: require.resolve("path-browserify"),
        zlib: require.resolve("browserify-zlib"),
        querystring: require.resolve("querystring-es3"),
        //"path": require.resolve("path-browserify"),
        crypto: require.resolve("crypto-browserify"),
        stream: require.resolve("stream-browserify"),
        http: require.resolve("stream-http"),
        url: require.resolve("url/"),
        buffer: require.resolve("buffer/"),
        util: require.resolve("util/"),
        fs: false,
        net: false
    });
    config.resolve.fallback = fallback;
    return config;
};