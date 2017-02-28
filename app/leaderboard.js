/**
 * Created by clark on 2/28/17.
 * JS file for leaderboard.
 */
PlayersList = new Mongo.Collection('players');

if(Meteor.isClient){
  Template.leaderboard.helpers({
    'player': function(){
      return PlayersList.find();
    }
  });
  Template.leaderboard.events({
    'click .player': function(){
      console.log("You clicked a .player element");
    }
  });
}

if(Meteor.isServer){
  // this code only runs on the server
}
