# hcal

## HTML5 calendar widget inspired by iOS
Created by the awesome eCommerce team at www.hse24.de

This HTML component looks pretty similar to the native calendar app of iOS. It's dead simple to use, small in file size (less than 5kb) and scales to any window/screen size.

![Smartphone portrait mode](https://raw.githubusercontent.com/valnub/hcal/master/screens/screen2.png)

## Requirements

- normalize.css
- jQuery 2.x (probably also works with 1.x but not tested)

## Browser support

- Safari on iOS
- Google Chrome on Desktop Windows
- (Want more? Let me know!)

## How to use

First, add hcal.min.css to the `<head>` section of your HTML file from the build directory:
```html
<link rel="stylesheet" href="hcal.min.css">
```

Then add the javascript lib to the end of `<body>`. Make sure that jQuery has been loaded before:

```html
<script src="jquery.min.js"></script>
<script src="hcal.min.js"></script>
```

Now, you're ready to initialize:

```javascript
  $(document).ready(function () {
    // Show dates from 25h to 31st
    var dates = [25, 26, 27, 28, 29, 30, 31];

    // Remember to replace 'yourContainer' with the id or class of the element in which you want hcal to appear
    var $hcal = $('#yourContainer').hcal(dates, 3, 'Thursday, March 28th 2015', 'us');
  });
```

This will give you an empty calendar with dates from 25th to 31st in the header section. The fourth element (index=3) has a round circle. Below the dates, the string 'March 28th 2015' will appear. Time settings are set to U.S. standard (1am instead of 01:00). If you prefer German/European setting use 'ger' instead of 'us'.

To add an appointment to your calendar, just call:

```javascript
$hcal.addHcalAppointment(1, 2, 'Go to the barber', 'Barbers place', 'Do not forget this!', 2);
```

This will give you a new entry in the calendar at 1am for 2 hours. Title will be 'Go to the barber', the place is 'Barbers place', description is 'Do not forget this!' and color scheme 2 (red) will be used (you can choose between up to 4 predefined color schemes).

More examples:

```javascript
// Start at 8am for two hours, use rgb color [154,123,165] instead of predefined color sheme
$hcal.addHcalAppointment(8, 2, 'Go to school', 'School', 'Learn some cool stuff', [154,123,165]);

// Start at 8pm for 3 hours and use color scheme 4
$hcal.addHcalAppointment(20, 3, 'Meet Cindy', 'Cindy\'s home', ';-)', 4);
