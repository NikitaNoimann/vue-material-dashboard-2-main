module.exports = {
    devServer: {
        proxy: {
            '^/api': {
                target: 'http://localhost:9200',
                changeOrigin: true
            },
        }
    }
}