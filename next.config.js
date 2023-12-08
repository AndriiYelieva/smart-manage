/** @type {import('next').NextConfig} */
const path = require('path')
// const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  distDir: 'dist',
  // basePath: isProd ? '/dzen-test-task/orders' : '',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig
