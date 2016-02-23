var React = require('react')

var UserProfile = React.createClass({
  render: function(){
    return (
      <div className="col-lg-4">
          <img className="img-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140" />
          <h2>Петрунин В. П.</h2>
          <p>Россия, г. Москва; 15.04.1981 </p>
      </div>
    )
  }
});

module.exports = UserProfile;