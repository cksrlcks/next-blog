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
        space: 'szikisnpiddf',
        accessToken: 'NHo2ByFSfsVvVZpuNEsqdr7aC53bcsA89jOGGzSLYKk'
    }
}

