module.exports = {
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: '/',
        permanent: false,
      },
    ]
  },
}
