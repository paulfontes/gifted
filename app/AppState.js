import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []

  /**@type {import('./models/Gift.js').Gift[]} */
  gifts = []


  identity = null




}

export const AppState = createObservableProxy(new ObservableAppState())