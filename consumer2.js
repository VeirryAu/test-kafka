

const { kafka } = require('./kafka')

const consumer2 = kafka.consumer({ groupId: 'test-group2' })

consumer2.connect().then(() => {
  consumer2.subscribe({ topic: 'test-topic', fromBeginning: true }).then(() => {
    consumer2.run({
      eachMessage: async ({ topic, partition, message }) => {
        console.log({
          value: message.value.toString(),
        })
      },
    })
  })
})