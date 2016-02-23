var React = require('react');

var SocialM = React.createClass({
  render: function(){
    return (
      <div>
        <p> Social Media </p>
        <ul className="list-group">
	        <li>last 5 twits</li>
	        <li>last pic</li>
	        <li>link to the resume</li>
	    </ul>
      </div>
    )
  }
})

module.exports = SocialM;