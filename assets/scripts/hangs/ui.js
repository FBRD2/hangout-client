'use strict'

const store = require('../store')
const showHangsTemplate = require('../templates/hang-listing.handlebars')
const showMyHangsTemplate = require('../templates/my-hang-listing.handlebars')
const rsvpTemplate = require('../templates/rsvp-listing.handlebars')
const showUpcomingHangs = require('../templates/upcoming-hangs-listing.handlebars')

// ---------- Create New Event Toggle -------------
const onAddNewHangFormSuccess = function (event) {
  $('.hang-form').show()
  $('#message').show()
  $('#message').text('Create a new event!')
  $('#message').fadeOut(1500)
}

const onAddNewHangFormFailure = function (event) {
  $('.hang-form').show()
  // $('#message').show(2200)
  // $('#message').text('Failure to load new event form!')
  // $('#message').hide(2200)
}

const onHideNewHangFormSuccess = function (event) {
  $('.hang-form').hide()
}

const onHideNewHangFormFailure = function (event) {
  $('.hang-form').hide()
  // $('#message').show(2200)
  // $('#message').text('Failure to remove form!')
  // $('#message').hide(2200)
}

// ---------- Edit Event Toggle -------------
// const onEditFormShowSuccess = function (event) {
//   $('.update').show()
//   console.log('succes on edit')
//   console.log(error)
//   $('#message').show()
//
//   $('#message').fadeOut(3000)
// }
//
// const onEditFormShowFailure = function (event) {
//   $('.update').show()
//   console.log('failure to show edit')
//   console.log(error)
//   $('#message').show()
//   $('#message').text('Failure to remove form!')
//   $('#message').fadeOut(3000)
// }

// ---------- Creating a New Hang -------------
const onNewHangSuccess = function (data) {
  $('#message').show()
  $('#message').text('New Event Added!')
  $('#message').fadeOut(1500)
  $('#addHang').closest('form').find('input[type=text], textarea').val('')
  $('#addHang').closest('form').find('input[type=date], textarea').val('')
}

const onNewHangFailure = function () {
  $('#message').show()
  $('#message').text('FAILURE TO ADD NEW EVENT!')
  $('#message').fadeOut(1500)
  $('#addHang').closest('form').find('input[type=text], textarea').val('')
  $('#addHang').closest('form').find('input[type=date], textarea').val('')
}

// ---------- Showing All Hangs -------------
const showHangsSuccess = function (data) {
  const showHangsHtml = showHangsTemplate({ hangs: data.hangs })
  $('.content').html(showHangsHtml)
  $('#message').show()
  $('#message').text('Viewing All Events!')
  $('#message').fadeOut(1500)
  $('.content').show()
  $('.update').hide()
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
  $('#message').show()
  $('#message').text('Viewing Upcoming Events!')
  $('#message').fadeOut(1500)
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
  $('#message').show()
  $('#message').text('THERE WAS AN ERROR!')
  $('#message').fadeOut(1500)
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
  $('#message').stop()
  $('#message').show()
  $('#message').text('Viewing Your Events!')
  $('#message').fadeOut(1500)
}

const onShowMyHangsFailure = function (data) {
  $('#message').show()
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
  $('#message').show()
  $('#message').text('Viewing RSVP\'D Events!')
  $('#message').fadeOut(1500)
}

// ---------- Deleting a Hang -------------
const onDeleteHangSuccess = function () {
  $('#message').show()
  $('#message').text('Your Events Has Been Deleted!')
  $('#message').fadeOut(1500)
}

const onDeleteHangfailure = function () {
  $('#message').show()
  $('#message').text('Failure to Delete Event')
  $('#message').fadeOut(1500)
}

// ---------- Updating a Hang -------------
const onUpdateHangSuccess = function () {
  $('#message').show()
  $('#message').text('Event Updated!')
  $('#message').fadeOut(1500)
}

const onUpdateHangFailure = function () {
  $('#message').show()
  $('#message').text('Failure to Update Event!')
  $('#message').fadeOut(1500)
}

// ---------- RSVP -------------
const rsvpHangSuccess = function (data) {
  $('#message').show()
  $('#message').text('You RSVP\'D To The Event!')
  $('#message').fadeOut(1500)
  // console.log('RSVP hang success bb')
}

const rsvpHangFailure = function (data) {
  // console.log('RSVP hang fail bb')

  $('#message').show()
  $('#message').text('You must sign in to use RSVP features')
  $('#message').fadeOut(1500)
}

module.exports = {
  onAddNewHangFormSuccess,
  onAddNewHangFormFailure,
  onHideNewHangFormSuccess,
  onHideNewHangFormFailure,
  // onEditFormShowSuccess,
  // onEditFormShowFailure,
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
