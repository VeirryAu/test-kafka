const { kafka } = require('./kafka')

const producer = kafka.producer()

producer.connect().then(() => {
  producer.send({
    topic: 'test-topic',
    messages: [
      {
        value: 'Good night, Ngopi Coder!'
      },
    ],
  }).then(() => {
    producer.disconnect()
  })
})

