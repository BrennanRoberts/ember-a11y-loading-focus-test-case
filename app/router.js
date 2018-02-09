import EmberRouter from '@ember/routing/router';
import config from './config/environment';

let oldFocus = HTMLElement.prototype.focus;
HTMLElement.prototype.focus = function() {
  oldFocus.apply(this, ...arguments);
  console.log('Focusing', this.innerHTML);
};

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('foo', function() {
    this.route('bar');
  });
});

export default Router;
