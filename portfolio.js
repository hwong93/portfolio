$(document).on('ready', function(){

  $('#home').on('click', function(){
    $('.tag').removeClass('positioned')
  })

  $('#aboutme').on('click', function(){
    $('.tag').removeClass('positioned')
    $('.aboutMe').addClass('positioned')
  })

  $('#projects').on('click', function(){
    $('.tag').removeClass('positioned')
    $('.projects').addClass('positioned')
  })

  $('#skills').on('click', function(){
    $('.tag').removeClass('positioned')
    $('.skills').addClass('positioned')
  })

  $('#education').on('click', function(){
    $('.tag').removeClass('positioned')
    $('.education').addClass('positioned')
  })

  $('#experience').on('click', function(){
    $('.tag').removeClass('positioned')
    $('.experience').addClass('positioned')
  })



})
