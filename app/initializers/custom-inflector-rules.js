import Inflector from 'ember-inflector';

export function initialize(/* application */) {
  const inflector = Inflector.inflector;

//   // Tell the inflector that the plural of "campus" is "campuses"
//   inflector.irregular('campus', 'campuses');

  // Tell the inflector that the plural of "advice" is "advice"
  inflector.uncountable('mission');
}

export default {
  name: 'custom-inflector-rules',
  initialize
};