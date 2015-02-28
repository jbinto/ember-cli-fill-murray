import Ember from 'ember';

export default Ember.Component.extend({
  // defaults
  height: 100,
  width: 100,

  src: function() {
    var base = "http://www.fillmurray.com/";
    return base + this.get('width') + '/' + this.get('height');
  }.computed('height', 'width')
});
