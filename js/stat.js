'use strict';

// common
var BYTE_SIZE = 256;

// clouds
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var SHADOW_COLOR = 'rgba(0, 0 , 0, 0.7)';

// results: text
var HEADER_MESSAGE = 'Ура вы победили!\nСписок результатов:';
var TEXT_HEIGHT = 16;
var CLOUD_FONT = '16px PT Mono';

// results: bar
var BAR_HEIGHT = 150;
var COLUMN_WIDTH = 40;
var COLUMN_GAP = 50;
var YOUR_COLOR = 'rgba(255, 0, 0, 1)';
var CURRENT_PLAYER_STRING = 'Вы';

var getPreparedTimes = function (times) {
  var arr = [];
  times.forEach(function (el) {
    arr.push(Math.round(parseInt(el, 10)));
  });

  return arr;
};

var getRandomRgbColor = function () {
  var red = Math.floor(Math.random() * BYTE_SIZE);
  var green = Math.floor(Math.random() * BYTE_SIZE);
  var blue = Math.floor(Math.random() * BYTE_SIZE);

  return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = function (ctx, text, x, y) {
  ctx.fillStyle = '#000';
  ctx.font = CLOUD_FONT;
  ctx.fillText(text, x, y);
};

var renderHeaderMessage = function (ctx, string) {
  var textArr = string.split('\n');

  for (var i = 0, n = textArr.length; i < n; i++) {
    renderText(ctx, textArr[i], CLOUD_X + CLOUD_WIDTH / 4, CLOUD_Y + TEXT_HEIGHT * (i + 1), CLOUD_FONT);
  }
};

var renderResultsBar = function (ctx, names, times) {
  var roundedTimes = getPreparedTimes(times);
  var maxTime = getMaxElement(roundedTimes);

  for (var i = 0, n = roundedTimes.length; i < n; i++) {
    renderText(ctx, roundedTimes[i], CLOUD_X + COLUMN_GAP + (COLUMN_GAP + COLUMN_WIDTH) * i, CLOUD_HEIGHT - BAR_HEIGHT - GAP * 2 - TEXT_HEIGHT);

    renderText(ctx, names[i], CLOUD_X + COLUMN_GAP + (COLUMN_GAP + COLUMN_WIDTH) * i, CLOUD_HEIGHT - GAP);

    if (names[i] === CURRENT_PLAYER_STRING) {
      ctx.fillStyle = YOUR_COLOR;
    } else {
      ctx.fillStyle = getRandomRgbColor();
    }
    ctx.fillRect(CLOUD_X + COLUMN_GAP + (COLUMN_GAP + COLUMN_WIDTH) * (i), CLOUD_HEIGHT - (TEXT_HEIGHT + GAP) - (BAR_HEIGHT * roundedTimes[i]) / maxTime, COLUMN_WIDTH, (BAR_HEIGHT * roundedTimes[i]) / maxTime);
  }
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, SHADOW_COLOR);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  renderHeaderMessage(ctx, HEADER_MESSAGE);

  renderResultsBar(ctx, names, times);
};
