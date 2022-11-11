const { spec } = require('pactum')

describe('Booking - Restful Booker', () => {
    it('Should return code name ok', async () => {
        await spec()
        .get('https://restful-booker.herokuapp.com/booking')
        .expectStatus(200)
    })
})