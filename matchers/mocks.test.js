const axios = require('axios')
jest.unmock('axios')

const doStuff = async () => {
  const response = await axios.get('http://localhost:3000/posts/1')
  response.extraData = 'really important'
  return response
}

test('mocks axios properly', async () => {
  const response = await doStuff()
  expect(axios.get).toHaveBeenCalledTimes(1)
  expect(response.id).toEqual(-1)
  expect(response.extraData).toEqual('really important')
})
