'use strict'

const store = require('../store')

// -------- Sign Up  -----------
const onSignUpSucess = function (data) {
  // console.log('onSignUpSucess data is: ', data)
  $('#message').show()
  $('#message').text('SIGNED UP!')

  $('#sign-up').closest('form').find('input[type=text], textarea').val('')
  $('#sign-up').closest('form').find('input[type=password], textarea').val('')
}

const onSignUpFailure = function () {
  $('#message').show()
  $('#message').text('Sign Up Error!')

  // console.log('onSignUpFailure data is: ')
  $('#sign-up').closest('form').find('input[type=text], textarea').val('')
  $('#sign-up').closest('form').find('input[type=password], textarea').val('')
}

// -------- Sign In -----------
const onSignInSucess = function (data) {
  // console.log('onSignInSucess data is: ', data)
  $('#message').show()
  $('#message').text('SIGNED IN!')
  $('.content').hide()
  $('#sign-in').closest('form').find('input[type=text], textarea').val('')
  $('#sign-in').closest('form').find('input[type=password], textarea').val('')
  store.user = data.user
  $('.sign-up').hide()
  $('.sign-in').hide()
  $('#change-password').show()
  $('#sign-out').show()
  $('#show-my-hangs').show()
  $('#addHang').show()
  $('#rsvp-hangs').show()
  $('#home').fadeOut(800)
  $('#home-two').hide()
  $('.three-buttons').show()
  $('.hang-form').hide()
  $('#show-hangs').show()
  $('#show-upcoming-hangs').hide()
}

const onSignInFailure = function () {
  $('#message').show()
  $('#message').text('Sign In Error!')

  // console.log('onSignInFailure data is: ')
  $('#sign-in').closest('form').find('input[type=text], textarea').val('')
  $('#sign-in').closest('form').find('input[type=password], textarea').val('')
}

// -------- Change Password -----------
const onChangePasswordSuccess = function (data) {
  $('#message').show()
  $('#message').text('PASSWORD CHANGED!')
  // console.log('onChangePasswordSuccess data is: ', data)
  $('#change-password2').trigger('reset')
  // $('#change-password').closest('form').find('input[type=password], textarea').val('')
  // $('#change-password').closest('form').find('input[type=password], textarea').val('')
}

const onChangePasswordFailure = function () {
  $('#message').show()
  $('#message').text('Password Change Error!')
  // console.log('onChangePasswordFailure data is: ')
  $('#change-password2').trigger('reset')
  // $('#change-password').closest('form').find('input[type=password], textarea').val('')
  // $('#change-password').closest('form').find('input[type=password], textarea').val('')
}

// -------- Sign Out -----------
const onSignOutSuccess = function (data) {
  // console.log('onSignOutSuccess data is: ', data)
  $('#message').show()
  $('#message').text('SIGNED OUT!')
  $('.sign-up').show()
  $('.sign-in').show()
  $('#change-password').hide()
  $('#show-my-hangs').hide()
  $('#addHang').hide()
  $('.content').hide()
  $('#rsvp-hangs').hide()
  $('#home').show()
  $('#sign-out').hide()
  $('#show-hangs').hide()
  $('.hang-form').hide()
  $('#show-upcoming-hangs').show()
  $('.three-buttons').hide()
}

const onSignOutFailure = function () {
  // console.log('onSignOutFailure data is: ')
  $('#message').show()
  $('#message').text('Sign Out Error!')
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
