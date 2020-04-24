'use strict'

const store = require('../store')

const onSignUpSucess = function (data) {
  // $('#message').text('Successful sign up!')
  // $('#message').removeClass()
  // $('#signInMessage').text('')
  // $('#sign-up').trigger('reset')
  // $('#sign-up')[0].reset()
  console.log('onSignUpSucess data is: ', data)
  $('#message').show(2800)
  $('#message').text('SIGNED UP!')
  $('#message').hide(2800)
  $('#sign-up').closest('form').find('input[type=text], textarea').val('')
  $('#sign-up').closest('form').find('input[type=password], textarea').val('')
}

const onSignUpFailure = function () {
  // $('#message').text('Did not sign up')
  // $('#message').removeClass()
  // $('#message').addClass('failure')
  // $('#sign-up').trigger('reset')
  // $('#signInMessage').text('')
  console.log('onSignUpFailure data is: ')
  $('#sign-up').closest('form').find('input[type=text], textarea').val('')
  $('#sign-up').closest('form').find('input[type=password], textarea').val('')
}

const onSignInSucess = function (data) {
  // $('#signInMessage').text('Successful sign in')
  // $('#signInMessage').removeClass()
  // $('.sign-in').addClass('hidden')
  // $('.sign-up').addClass('hidden')
  // $('.change-password').removeClass('hidden')
  // $('#sign-out').removeClass('hidden')
  // $('#signUpMessage').text('')
  // $('#message').text('')
  // $('#sign-in').trigger('reset')
  console.log('onSignInSucess data is: ', data)
  $('#message').show()
  $('#message').text('SUCCESS')
  $('#message').hide(2800)
  $('#sign-in').closest('form').find('input[type=text], textarea').val('')
$('#sign-in').closest('form').find('input[type=password], textarea').val('')
  store.user = data.user


}

const onSignInFailure = function () {
  // $('#sign-in').trigger('reset')
  // $('#signInMessage').text('Wrong password or email')
  // $('#signInMessage').removeClass()
  // $('#signInMessage').addClass('failure')
  // $('#message').text('')
  console.log('onSignInFailure data is: ')
  $('#sign-in').closest('form').find('input[type=text], textarea').val('')
$('#sign-in').closest('form').find('input[type=password], textarea').val('')
}

const onChangePasswordSuccess = function (data) {
  // $('#change-password').trigger('reset')
  // $('#passwordChangeMessage').text('You changed your password!')
  // $('#passwordChangeMessage').removeClass()
  // $('#signInMessage').text('')
  console.log('onChangePasswordSuccess data is: ', data)
  $('#change-password').closest('form').find('input[type=text], textarea').val('')
    $('#change-password').closest('form').find('input[type=password], textarea').val('')
}

const onChangePasswordFailure = function () {
  // $('#change-password').trigger('reset')
  // $('#passwordChangeMessage').text('You did not change your password')
  // $('#passwordChangeMessage').removeClass()
  // $('#passwordChangeMessage').addClass('failure')
  // $('#signInMessage').text('')
  console.log('onChangePasswordFailure data is: ')
  $('#change-password').closest('form').find('input[type=text], textarea').val('')
    $('#change-password').closest('form').find('input[type=password], textarea').val('')
}

const onSignOutSuccess = function (data) {
  // $('#sign-out').trigger('reset')
  // $('#signInMessage').text('You signed out')
  // $('.signInMessage').removeClass()
  // $('.sign-in').removeClass('hidden')
  // $('.sign-up').removeClass('hidden')
  // $('.change-password').addClass('hidden')
  // $('#sign-out').addClass('hidden')
  // $('.container').addClass('hidden')
  // $('#passwordChangeMessage').text('')
  // $('.content').empty()
  console.log('onSignOutSuccess data is: ', data)
  $('#message').show()
  $('#message').text('SIGNED OUT')
  $('#message').hide(3300)
  $('#sign-out').closest('form').find('input[type=text], textarea').val('')
  $('#sign-out').closest('form').find('input[type=password], textarea').val('')
}

const onSignOutFailure = function () {
  // $('#sign-out').trigger('reset')
  // $('#signOutMessage').text('Sign out failed')
  // $('#signOutMessage').removeClass()
  // $('#signOutMessage').addClass('failure')
  // $('#signInMessage').text('')
  // $('#passwordChangeMessage').text('')
  console.log('onSignOutFailure data is: ')
  $('#sign-out').closest('form').find('input[type=text], textarea').val('')
  $('#sign-out').closest('form').find('input[type=password], textarea').val('')
}

module.exports = {
  onSignUpSucess,
  onSignUpFailure,
  onSignInSucess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
