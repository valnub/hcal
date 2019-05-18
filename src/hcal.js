/*jslint browser: true*/
/*global $, jQuery*/

/**
 * The jQuery plugin namespace.
 * @external "jQuery.fn"
 * @see {@link http://learn.jquery.com/plugins/|jQuery Plugins}
 */

/**
 * A jQuery plugin to create a iOS like calendar
 * @function external:"jQuery.fn".starfairy
 */
(function ($) {
  'use strict';
  
  var $container,
    $hcal,
    $hcalHeader,
    $hcalBody;

  /**
   * Creates the header
   *
   * @memberOf external:"jQuery.fn".hcal
   * @private
   * @param {array} dates The dates
   * @param {number} markerpos The position which day should be marked with a circle in the header
   * @param {today} today The today string
   * @param {string} format 'us' or 'ger'
   * @return {jQuery} The header
   */
  function createHcalHeader(dates, markerpos, today, format) {
    var $header = $('<div class="hcal-header">'),
      i = 0,
      $days = $('<div class="hcal-header-days">').appendTo($header),
      $dates = $('<div class="hcal-header-dates">').appendTo($header),
      $day,
      $date,
      $dateInner,
      $today,
      days = format === 'ger' ? ['M', 'D', 'M', 'D', 'F', 'S', 'S'] : ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      date;
    
    for (i = 0; i < dates.length; i = i + 1) {
      $day = $('<div class="hcal-header-day">').text(days[i]).appendTo($days);
      $date = $('<a href="#" class="hcal-header-date">').appendTo($dates);
      $dateInner = $('<div class="hcal-header-date-inner">').text(dates[i]).appendTo($date);
      if (i === markerpos) {
        $dateInner.addClass('active');
      }
    }
    
    $today = $('<div class="hcal-header-today">').text(today).appendTo($header);
    
    return $header;
  }
  
  /**
   * Creates the body
   *
   * @param {string} format 'us' or 'ger'
   * @param {number} startHour The hour to start at
   * @return {jQuery} The body
   */
  function createHcalBody(format, starthour) {
    var $body = $('<div class="hcal-body">'),
      i = 0,
      $row,
      $time,
      $hr,
      timevalue;
    
    for (i = starthour; i < 25; i = i + 1) {
      timevalue = format === 'ger' ? i + ':00' : (i % 12) + (i < 12 ? 'am' : 'pm');
      if (format !== 'ger') {
        // Fix US values
        timevalue = i === 0 ? '12am' : timevalue;
        timevalue = i === 12 ? '12pm' : timevalue;
        timevalue = i === 24 ? '12am' : timevalue;
      }
      $row = $('<div class="hcal-body-row">').appendTo($body);
      $time = $('<div class="hcal-body-row-time">').text(timevalue).appendTo($row);
      $hr = $('<div class="hcal-body-row-hr">').appendTo($row);
    }
    
    return $body;
  }
  
  /**
   * Initializes this plugin
   *
   * @param {jQuery} el The container element
   * @param {array} dates The dates
   * @param {number} markerpos The position which day should be marked with a circle in the header
   * @param {string} today The today-string
   * @param {string} format 'us' or 'ger' (2am vs. 02:00)
   * @param {number} startHour The hour to start at
   */
  function init(el, dates, markerpos, today, format, starthour) {
    $container = el;
    $hcal = $('<div class="hcal">');
    
    $hcalHeader = createHcalHeader(dates, markerpos, today, format).appendTo($hcal);
    $hcalBody = createHcalBody(format, starthour).appendTo($hcal);
    
    $hcal.appendTo($container);
  }
  
  /**
   * Adds a new appointment
   *
   * @param {number} position A number between 0-24 where to put the appointment
   * @param {number} duration The duration in hours
   * @param {string} title The title
   * @param {string} place Where the appointment will be
   * @param {string} desc A short description
   * @param {any} color Choose one of four colors (e.g. 1) or use a custom rgb color value e.g. [106,181,127]
   * @return {jQuery} The selected element
   */
  $.fn.addHcalAppointment = function (position, duration, title, place, desc, color) {
    var $row = $hcalBody.children('.hcal-body-row:nth-child(' + (position + 1) + ')'),
      $item = $('<div class="hcal-body-row-item">'),
      $headline = $('<h3 class="hcal-body-row-item-headline">').appendTo($item),
      $desc = $('<div class="hcal-body-row-item-text">').text(desc).appendTo($item),
      rgbaStringFull,
      rgbaStringTransparent;
    
    // Set headline and place
    $headline.html(title + '<span class="hcal-item-nr"> | ' + place + '</span>');
    
    // Set duration
    $item.addClass('hcal-duration-' + duration + 'h');
    
    // Set color
    if (Object.prototype.toString.call(color) === '[object Array]') {
      rgbaStringFull = 'rgba(' + color[0] + ', ' + color[1] + ', ' + color[2] + ', 1)';
      rgbaStringTransparent = 'rgba(' + color[0] + ', ' + color[1] + ', ' + color[2] + ', 0.7)';
      $item.css({
        'background': rgbaStringTransparent,
        'border-left': '2px solid ' + rgbaStringFull
      });
    } else {
      $item.addClass('hcal-body-item-color0' + color);
    }
    
    $item.prependTo($row);
    
    return this;
  };

  /**
   * Register plugin
   *
   * @param {array} dates The dates
   * @param {number} markerpos The position which day should be marked with a circle in the header
   * @param {string} today The today-string
   * @param {string} format 'us' or 'ger' (2am vs. 02:00)
   * @param {number} startHour (optional) The hour to start at (default = 0)
   * @return {jQuery} The selected element
   */
  $.fn.hcal = function (dates, markerpos, today, format, starthour=0) {
    init(this, dates, markerpos, today, format, starthour);
    return this;
  };

}(jQuery));
