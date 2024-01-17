import mitt from 'mitt'

export default defineNuxtPlugin(() => {
  const emitter = mitt()

  return {
    provide: {
      emit: emitter.emit, // Will emit an event
      listen: emitter.on, // Will register a listener for an event
      off: emitter.off, // Will remove a listener for an event
      all: emitter.all // Will list all events
    }
  }
})
