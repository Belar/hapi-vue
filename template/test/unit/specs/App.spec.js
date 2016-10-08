import Vue from 'vue'
import App from 'client/App'

import VueResource from 'vue-resource'
Vue.use(VueResource)

const appInstance = new Vue(App)

describe('App.vue component', function() {
  it('should set correct default data', function() {
    expect(typeof App.data).to.be.equal('function')
    var defaultData = App.data()
    expect(defaultData.msg).to.be.equal('Welcome!')
  })

  let promiseCall

  before(function() {
    promiseCall = sinon.stub(Vue, 'http').returnsPromise()
  })

  after(function() {
    Vue.http.restore()
  })

  it('should contain proper methods', function(done) {
    expect(typeof appInstance.helloCall).to.be.equal('function')
    done()
  })

  // https://github.com/substantial/sinon-stub-promise
  it('helloCall should set proper data from AJAX response [success]', function(done) {
    promiseCall.resolves({
      data: {
        message: 'Hello!'
      }
    })
    appInstance.helloCall()
    expect(appInstance.api).to.be.equal('Hello!')
    done()
  })

  it('helloCall should set proper data from AJAX response [fail]', function(done) {
    promiseCall.rejects({
      data: {
        'statusCode': 400,
        'error': 'Bad Request',
        'message': 'invalid query'
      }
    })
    appInstance.helloCall()
    expect(appInstance.error).to.be.not.empty
    done()
  })
})
