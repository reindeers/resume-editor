var React = require('react')

var UserProfile = React.createClass({
  render: function(){
    return (
      <div className="col-lg-8">
          <img className="img-circle" src="http://static.tumblr.com/1f715a304ae6c5f77d4eb64ec2ff0721/neua2wl/Sxonxp05n/tumblr_static_a9zowqcbtz404wwg84w8gwcw0.gif" alt="Generic placeholder image" width="140" height="140" />
          <h2>Dr. Hannibal Lecter</h2>
          <p>U.S., baltimore; 15.04.1966 </p>
      </div>
    )
  }
});

module.exports = UserProfile;