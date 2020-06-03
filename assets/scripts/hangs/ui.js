'use strict'

const store = require('../store')
const showHangsTemplate = require('../templates/hang-listing.handlebars')
const showMyHangsTemplate = require('../templates/my-hang-listing.handlebars')
const rsvpTemplate = require('../templates/rsvp-listing.handlebars')
const showUpcomingHangs = require('../templates/upcoming-hangs-listing.handlebars')

// ---------- Create New Event Toggle -------------
const onAddNewHangFormSuccess = function (event) {
  $('.hang-form').show()
  $('#message').show(2200)
  $('#message').text('Create a new event!')
  $('#message').hide(2200)
}

const onAddNewHangFormFailure = function (event) {
  $('.hang-form').show()
  $('#message').show(2200)
  $('#message').text('Failure to load new event form!')
  $('#message').hide(2200)
}

const onHideNewHangFormSuccess = function (event) {
  $('.hang-form').hide()
  $('#message').show(2200)
  $('#message').text('!')
  $('#message').hide(2200)
}

const onHideNewHangFormFailure = function (event) {
  $('.hang-form').hide()
  $('#message').show(2200)
  $('#message').text('Failure to remove form!')
  $('#message').hide(2200)
}

// ---------- Edit Event Toggle -------------
const onEditFormShowSuccess = function (event) {
  $('.update').show()
  console.log('succes on edit')
  console.log(error)
  $('#message').show(2200)
  $('#message').text('Failure to remove form!')
  $('#message').hide(2200)
}

const onEditFormShowFailure = function (event) {
  $('.update').show()
  console.log('failure to show edit')
  console.log(error)
  $('#message').show(2200)
  $('#message').text('Failure to remove form!')
  $('#message').hide(2200)
}

// ---------- Creating a New Hang -------------
const onNewHangSuccess = function (data) {
  $('#message').show(2200)
  $('#message').text('NEW HANG ADDED!')
  $('#message').hide(2200)
  $('#addHang').closest('form').find('input[type=text], textarea').val('')
  $('#addHang').closest('form').find('input[type=date], textarea').val('')
}

const onNewHangFailure = function () {
  $('#message').show(2200)
  $('#message').text('FAILURE TO ADD NEW HANG!')
  $('#message').hide(2200)
  $('#addHang').closest('form').find('input[type=text], textarea').val('')
  $('#addHang').closest('form').find('input[type=date], textarea').val('')
}

// ---------- Showing All Hangs -------------
const showHangsSuccess = function (data) {
  const showHangsHtml = showHangsTemplate({ hangs: data.hangs })
  $('.content').html(showHangsHtml)
  $('#message').show(2200)
  $('#message').text('VIEWING ALL HANGS!')
  $('#message').hide(2200)
  $('.content').show()
  if (data.hangs.length === 0) {
    // console.log('no events yet')
  } else {
    // console.log('here are all your events: ', data.hangs)
  }
}

// ---------- Showing Upcoming Hangs -------------
const showUpcomingHangsSuccess = function (data) {
  const showUpcomingsHangsHtml = showUpcomingHangs({ hangs: data.hangs })
  $('.content').html(showUpcomingsHangsHtml)
  $('#message').show(2200)
  $('#message').text('VIEWING ALL HANGS!')
  $('#message').hide(2200)
  $('.content').show()
  $('#home').hide()
  $('#home-two').show()
  if (data.hangs.length === 0) {
    // console.log('no events yet')
  } else {
    // console.log('here are all your events: ', data.hangs)
  }
}

const showHangsFailure = function (data) {
  $('#message').show(2200)
  $('#message').text('THERE WAS AN ERROR!')
  $('#message').hide(2200)
}

// ---------- Showing My Hangs -------------
const onShowMyHangsSuccess = function (data) {
  // array of our hangs
  const hangsArray = data.hangs

  // loop through the array of hangs
  hangsArray.forEach((hang) => {
    // check if current user owns it or not
    // log hang.owner and sotre.user.id to make sure these are the right values to compare
    if (hang.owner === store.user._id) {
      // if the current user owns it then add currentUserOwns true
      hang.currentUserOwns = true
    } else {
      // else add currentUserOwns false
      hang.currentUserOwns = false
    }
  })
  const showMyHangsHtml = showMyHangsTemplate({ hangs: data.hangs })
  $('.content').html(showMyHangsHtml)
  $('.content').show()
  $('#message').show(2200)
  $('#message').text('VIEW YOUR HANGS!')
  $('#message').hide(2200)
}

const onShowMyHangsFailure = function (data) {
  $('#message').show(2200)
  $('#message').text('Failure to Show Your Hangs')
}

// -------- Showing RSVP ------

const onShowRsvp = function (data) {
  // array of our hangs
  const rsvpArray = data.hangs
  // console.log('in RSVP array', rsvpArray)
  // loop through the array of hangs
  rsvpArray.forEach((hang) => {
    hang.rsvp.forEach((rsvp) => {
    // console.log('ANYTHING1', rsvp)
      if (store.user.email === rsvp.rsvp) {
      // if the current user owns it then add currentUserOwns true
        // console.log('ANYTHING2', rsvp.rsvp)
        hang.isGoing = true
      } else {
      // else add currentUserOwns false
        rsvp.isGoing = false
      }
    })
  })
  const showRsvp = rsvpTemplate({ hangs: data.hangs })
  $('.content').html(showRsvp)
  $('.content').show()
  $('#message').show(2200)
  $('#message').text('VIEW YOUR HANGS!')
  $('#message').hide(2200)
}

// ---------- Deleting a Hang -------------
const onDeleteHangSuccess = function () {
  $('#message').show(2200)
  $('#message').text('Your Hang has been Deleted!')
  $('#message').hide(2200)
}

const onDeleteHangfailure = function () {
  $('#message').show(2200)
  $('#message').text('Failure to Delete Hang')
  $('#message').hide(2200)
}

// ---------- Updating a Hang -------------
const onUpdateHangSuccess = function () {
  $('#message').show(2200)
  $('#message').text('HANG UPDATED!')
  $('#message').hide(2200)
}

const onUpdateHangFailure = function () {
  $('#message').show(2200)
  $('#message').text('Failure to Update Hang!')
  $('#message').hide(2000)
}

// ---------- RSVP -------------
const rsvpHangSuccess = function (data) {
  // console.log('RSVP hang success bb')
}

const rsvpHangFailure = function (data) {
  // console.log('RSVP hang fail bb')

  $('#message').show(2200)
  $('#message').text('You must sign in to use RSVP features')
  $('#message').hide(2000)
}

module.exports = {
  onAddNewHangFormSuccess,
  onAddNewHangFormFailure,
  onHideNewHangFormSuccess,
  onHideNewHangFormFailure,
  onEditFormShowSuccess,
  onEditFormShowFailure,
  showHangsSuccess,
  showHangsFailure,
  onNewHangSuccess,
  onNewHangFailure,
  onDeleteHangSuccess,
  onDeleteHangfailure,
  onUpdateHangSuccess,
  onUpdateHangFailure,
  onShowMyHangsSuccess,
  onShowMyHangsFailure,
  showUpcomingHangsSuccess,
  rsvpHangSuccess,
  onShowRsvp,
  rsvpHangFailure
}
