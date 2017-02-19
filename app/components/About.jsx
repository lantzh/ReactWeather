var React = require('react');


var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is a weather application built with <a href="https://facebook.github.io/react">React</a> and using the <a href="http://openweathermap.org">openWeatherMap API.</a></p>
    </div>
  )
};

module.exports = About;
