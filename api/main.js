import { Meteor } from 'meteor/meteor';
import { Migrations } from 'meteor/percolate:migrations';
// import './db/migrations';
import './tasks/tasks.methods';
import './tasks/tasks.publications';


// Sever rendering

Meteor.startup(() => {
  //creating database migrations
  Migrations.migrateTo('latest');
});
