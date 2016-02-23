var React = require('react');
var Router = require('react-router');
var UserProfile = require('./UserProfile');
var SocialM = require('./SocialM');
/*var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');*/


var Profile = React.createClass({
  getInitialState: function(){
    return {
      pic: [1,2,3],
      username: {},
      place: []
    }
  },
 /* componentDidMount: function(){
    this.ref = new Firebase('https://github-note-taker.firebaseio.com/');
    this.init(this.props.params.username)
  },
  componentWillReceiveProps: function(nextProps){
    this.unbind('notes');
    this.init(nextProps.params.username);
  },
  componentWillUnmount: function(){
    this.unbind('notes');
  },
  init: function(username){
    var childRef = this.ref.child(username);
    this.bindAsArray(childRef, 'notes');

    helpers.getGithubInfo(username)
      .then(function(data){
        this.setState({
          bio: data.bio,
          repos: data.repos
        })
      }.bind(this))
  },
  handleAddNote: function(newNote){
    this.ref.child(this.props.params.username).child(this.state.notes.length).set(newNote)
  },*/
  render: function(){
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile /*username={this.props.params.username} bio={this.state.bio}*/ />
        </div>
        <div className="col-md-8">
          <SocialM /*username={this.props.params.username} bio={this.state.bio}*/ />
        </div>
      </div>
    )
  }
})

module.exports = Profile;