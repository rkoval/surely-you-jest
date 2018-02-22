module.exports = {
  get: jest.fn(() => {
    return Promise.resolve({ id: -1, title: 'mocked response' })
  }),
}
