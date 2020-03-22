module.exports = {
    webpack: (config, { isServer }) => {
        // Fixes npm packages that depend on `fs` module
        if (!isServer) {
            config.node = {
                fs: 'empty'
            }
        }

        return config
    },
    env: {
        CONTENTFUL_SPACE_ID: 'szikisnpiddf',
        CONTENTFUL_ACCESS_TOKEN: 'NHo2ByFSfsVvVZpuNEsqdr7aC53bcsA89jOGGzSLYKk'
    }
}

