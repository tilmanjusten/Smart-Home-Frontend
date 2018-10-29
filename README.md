# Smart Home Frontend 

This application is the frontend part and talks to the Smart Home Backend via WebSockets.  
The UI is designed to run on a 5" touch display (800&times;480px) attached to a RaspberryPi.

## Views

### Lights

Display and toggle light state.

<img src="docs/img/views/lights.png" alt="Lights view">

### Weather

Display the current weather for every client.

<img src="docs/img/views/weather.png" alt="Displays the current weather">

#### Charts

Display the weather data of the last 24 to 30 hours.

<img src="docs/img/views/weather-charts.png" alt="Displays the weather data as line chart">

### Plants

Display the current moisture level.

<img src="docs/img/views/weather.png" alt="Plants view">

#### Charts

Display the moisture level of the last seven days.

<img src="docs/img/views/plants-charts.png" alt="Render moisture as line chart">

## Settings

Open for further development.

<img src="docs/img/views/settings.png" alt="Display settings">

## Installation

1. Run ``npm install && npm run build``
1. Optional: Deploy to the production system
1. Install screen via ``sudo apt-get install screen``
1. Open named screen session ``screen -S client``
1. Start the backend app that should be available at http://localhost:3000
1. Run ``DISPLAY=:0 chromium-browser http://localhost:3000 --kiosk --noerrdialogs --disable-translate --no-first-run --fast --fast-start --disable-infobars --disk-cache-dir=/dev/null`` on the production system
1. Leave session with ``strg+a d`` and reattach with ``screen -r client``

## Development

```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```
