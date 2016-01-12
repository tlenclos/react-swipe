'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var ReactSwipe = require('../react-swipe');

var PanesDesktop = Array.apply(null, Array(20)).map(function (_, i) {
  return React.createElement('div', {key: i},
    React.createElement('b', {className: 'desktop'}, i),
    React.createElement('b', {className: 'desktop'}, i),
    React.createElement('b', {className: 'desktop'}, i)
  );
});

var PanesTablet = Array.apply(null, Array(20)).map(function (_, i) {
  return React.createElement('div', {key: i},
      React.createElement('b', {className: 'tablet'}, i),
      React.createElement('b', {className: 'tablet'}, i)
  );
});

var PanesMobile = Array.apply(null, Array(20)).map(function (_, i) {
  return React.createElement('div', {key: i},
    React.createElement('b', {className: 'mobile'}, i)
  );
});

var Page = React.createClass({
  next: function () {
    this.refs.ReactSwipe.swipe.next();
  },

  prev: function () {
    this.refs.ReactSwipe.swipe.prev();
  },

  render: function () {
    return (
      React.createElement('div', null,
        React.createElement('h1', null, 'ReactSwipe'),
        React.createElement('h2', null, 'Mobile'),
        React.createElement(ReactSwipe, {
          ref: 'ReactSwipe',
          id: 'mySwipe'
        }, PanesMobile),
        React.createElement('h2', null, 'Tablet'),
        React.createElement(ReactSwipe, {
          ref: 'ReactSwipe',
          id: 'mySwipe'
        }, PanesTablet),
        React.createElement('h2', null, 'Desktop'),
        React.createElement(ReactSwipe, {
          ref: 'ReactSwipe',
          id: 'mySwipe'
        }, PanesDesktop),
        React.createElement('div', {style: {textAlign: 'center'}})
      )
    );
  }
});

ReactDOM.render(
  React.createElement(Page, null),
  document.getElementById('app')
);
