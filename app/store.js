const configureStore = require('@reduxjs/toolkit').configureStore
const reduxLogger = require('redux-logger')

const cakeRreducer = require('../features/cake/cakeSlice')
const icecreamRreducer = require('../features/icecream/icecreamSlice')
const userReducer = require('../features/user/userSlice')

const logger = reduxLogger.createLogger()

const store = configureStore({
    reducer: {
        cake: cakeRreducer,
        icecream: icecreamRreducer,
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

module.exports = store