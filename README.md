# hcal
HTML5 calendar widget inspired by iOS

This HTML component looks pretty similar to the native calendar app of iOS. It's 100% JavaScript-free, dead simple (just add one single CSS file and you're ready to go), small in file size (just 4kb) and scales to any window/screen size.

![Smartphone portrait mode](https://raw.githubusercontent.com/valnub/hcal/master/screens/screen.png)

## Requirements

- normalize.css - See /examples folder.
- **No** JavaScript, **no** jQuery or whatsoever

## Browser support

Only Safari Browser on iOS7 and iOS8 are supported.

## Note

Before you start, be aware that this is not a dynamic javascript lib. It requires server-side logic to be rendered. This widget only contains a CSS/HTML template that can be used to create a full functional calendar.

## How to use

First, add hcal.min.css to your HTML file from the build directly:
```html
<link rel="stylesheet" href="hcal.min.css">
```

Next, copy and paste the following HTML structure where you want your calendar to appear:

```html
<div class="hcal">

  <div class="hcal-header">

    <div class="hcal-header-days">
      <div class="hcal-header-day">M</div>
      <div class="hcal-header-day">D</div>
      <div class="hcal-header-day">M</div>
      <div class="hcal-header-day">D</div>
      <div class="hcal-header-day">F</div>
      <div class="hcal-header-day">S</div>
      <div class="hcal-header-day">S</div>
    </div>

    <div class="hcal-header-dates">
      <a href="#" class="hcal-header-date">
        <div class="hcal-header-date-inner">25</div>
      </a>
      <a href="#" class="hcal-header-date">
        <div class="hcal-header-date-inner">26</div>
      </a>
      <a href="#" class="hcal-header-date">
        <div class="hcal-header-date-inner">27</div>
      </a>
      <a href="#" class="hcal-header-date">
        <div class="hcal-header-date-inner active">28</div>
      </a>
      <a href="#" class="hcal-header-date">
        <div class="hcal-header-date-inner">29</div>
      </a>
      <a href="#" class="hcal-header-date">
        <div class="hcal-header-date-inner">30</div>
      </a>
      <a href="#" class="hcal-header-date">
        <div class="hcal-header-date-inner">31</div>
      </a>
    </div>

    <div class="hcal-header-today">
      Thursday, March 28th 2015
    </div>

  </div>

  <div class="hcal-body">

    <div class="hcal-body-row">
      <div class="hcal-body-row-time">00:00</div>
      <hr class="hcal-body-row-hr">
    </div>

    <div class="hcal-body-row">
      <div class="hcal-body-row-time">01:00</div>
      <hr class="hcal-body-row-hr">
    </div>

    <div class="hcal-body-row">
      <div class="hcal-body-row-time">02:00</div>
      <hr class="hcal-body-row-hr">
    </div>

    <div class="hcal-body-row">
      <div class="hcal-body-row-time">03:00</div>
      <hr class="hcal-body-row-hr">
    </div>

    <div class="hcal-body-row">
      <div class="hcal-body-row-time">04:00</div>
      <hr class="hcal-body-row-hr">
    </div>

    <div class="hcal-body-row">
      <div class="hcal-body-row-time">05:00</div>
      <hr class="hcal-body-row-hr">
    </div>

    <div class="hcal-body-row">
      <div class="hcal-body-row-time">06:00</div>
      <hr class="hcal-body-row-hr">
    </div>

    <div class="hcal-body-row">
      <div class="hcal-body-row-time">07:00</div>
      <hr class="hcal-body-row-hr">
    </div>

    <div class="hcal-body-row">
      <div class="hcal-body-row-time">08:00</div>
      <hr class="hcal-body-row-hr">
    </div>

    <div class="hcal-body-row">
      <div class="hcal-body-row-time">09:00</div>
      <hr class="hcal-body-row-hr">
    </div>

    <div class="hcal-body-row">
      <div class="hcal-body-row-time">10:00</div>
      <hr class="hcal-body-row-hr">
    </div>

    <div class="hcal-body-row">
      <div class="hcal-body-row-time">11:00</div>
      <hr class="hcal-body-row-hr">
    </div>

    <div class="hcal-body-row">
      <div class="hcal-body-row-time">12:00</div>
      <hr class="hcal-body-row-hr">
    </div>

    <div class="hcal-body-row">
      <div class="hcal-body-row-time">13:00</div>
      <hr class="hcal-body-row-hr">
    </div>

    <div class="hcal-body-row">
      <div class="hcal-body-row-time">14:00</div>
      <hr class="hcal-body-row-hr">
    </div>

    <div class="hcal-body-row">
      <div class="hcal-body-row-time">15:00</div>
      <hr class="hcal-body-row-hr">
    </div>

    <div class="hcal-body-row">
      <div class="hcal-body-row-time">16:00</div>
      <hr class="hcal-body-row-hr">
    </div>

    <div class="hcal-body-row">
      <div class="hcal-body-row-time">17:00</div>
      <hr class="hcal-body-row-hr">
    </div>

    <div class="hcal-body-row">
      <div class="hcal-body-row-time">18:00</div>
      <hr class="hcal-body-row-hr">
    </div>

    <div class="hcal-body-row">
      <div class="hcal-body-row-time">19:00</div>
      <hr class="hcal-body-row-hr">
    </div>

    <div class="hcal-body-row">
      <div class="hcal-body-row-time">20:00</div>
      <hr class="hcal-body-row-hr">
    </div>

    <div class="hcal-body-row">
      <div class="hcal-body-row-time">21:00</div>
      <hr class="hcal-body-row-hr">
    </div>

    <div class="hcal-body-row">
      <div class="hcal-body-row-time">22:00</div>
      <hr class="hcal-body-row-hr">
    </div>

    <div class="hcal-body-row">
      <div class="hcal-body-row-time">23:00</div>
      <hr class="hcal-body-row-hr">
    </div>

    <div class="hcal-body-row">
      <div class="hcal-body-row-time">24:00</div>
      <hr class="hcal-body-row-hr">
    </div>

  </div>

</div>
```

This will give you an empty calendar.

If you want to add an appointment, just find the div item with class hcal-body-row that matches the time that your appointment you'd like to save, for example for 3am (You might want to replace European time notation with US style (03:00 vs. 3am)):

```html
<div class="hcal-body-row">
  <div class="hcal-body-row-time">03:00</div>
  <hr class="hcal-body-row-hr">
</div>
```

Into this item, you simply add as first child a div like this:

```html
<div class="hcal-body-row-item hcal-duration-3h hcal-body-item-color01">
  <h3 class="hcal-body-row-item-headline">Barber appointment<span class="hcal-item-nr"> | Fakestreet 123</span></h3>
  <div class="hcal-body-row-item-text">Go to the barber, don't forget!</div>
</div>
```

Add your headline to the `<h3>` tag and add a description to hcal-body-row-item-text.

So, the result will be:

```html
<div class="hcal-body-row">
  <div class="hcal-body-row-item hcal-duration-3h hcal-body-item-color01">
    <h3 class="hcal-body-row-item-headline">Barber appointment<span class="hcal-item-nr"> | Fakestreet 123</span></h3>
    <div class="hcal-body-row-item-text">Go to the barber, don't forget!</div>
  </div>
  <div class="hcal-body-row-time">03:00</div>
  <hr class="hcal-body-row-hr">
</div>
```

## Configuration

Note that you can configure the color and duration of the appointment by adding the following classes to hcal-body-row-item:

- hcal-duration-3h // 3 hours (You can go up to 24h if you want)
- hcal-body-item-color01 // Choose from colors 1-4 (blue, red, green, orange)

<div class="hcal-body-row-item **hcal-duration-3h** **hcal-body-item-color01**">

## Dynamic markup generation

Yes, I know, there is a lot of copy + paste involved but I wanted to keep this widget javascript-free so I opted against dynamic generation of the markup via JavaScript. If there are enough ppl out there who want this feature, just let me know and I'll add a js lib.
