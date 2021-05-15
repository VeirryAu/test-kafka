const { kafka } = require('./kafka')

const consumer = kafka.consumer({ groupId: 'test-group' })

consumer.connect().then(() => {
  consumer.subscribe({ topic: 'test-topic', fromBeginning: true }).then(() => {
    consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        console.log({
          value: message.value.toString(),
        })
      },
    })
  })
})

