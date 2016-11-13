import {readDocument, writeDocument, addDocument, readDocumentCollection} from './database.js';



export function postFeedback(user, contents){
  var newFeedback = {
    "contents": contents
  };
  newFeedback = addDocument('feedback', newFeedback);

  writeDocument('feedback', newFeedback);

  //emulateServerReturn(newFeedback);
}

/**
 * Emulates how a REST call is *asynchronous* -- it calls your function back
 * some time in the future with data.
 */
function emulateServerReturn(data, cb) {
  setTimeout(() => {
    cb(data);
  }, 4);
}

/**
* Given a feed item ID, returns a FeedItem object with references resolved.
* Internal to the server, since it's synchronous.
*/
function getUserItemSync(userId) {
  var feedItem = readDocument('users', userId);
  // Resolve 'like' counter.
  feedItem.savedGraphs =
  feedItem.savedGraphs.map((id) => readDocument('savePage', id));
  feedItem.majors =
  feedItem.majors.map((id) => readDocument('majors', id));
  feedItem.minors =
  feedItem.minors.map((id) => readDocument('majors', id));
  // Assuming a StatusUpdate. If we had other types of
  // FeedItems in the DB, we would
  // need to check the type and have logic for each type.
  // Resolve comment author.
  return feedItem;
}
/**
* Emulates a REST call to get the feed data for a particular user.
* @param user The ID of the user whose feed we are requesting.
* @param cb A Function object, which we will invoke when the Feed's data is available.
*/
export function getUserData(user) {
  // Get the User object with the id "user".
  var userData = readDocument('users', user);
  return userData;
  // Get the Feed object for the user.
  // Map the Feed's FeedItem references to actual FeedItem objects.
  // Note: While map takes a callback function as an argument, it is
  // synchronous, not asynchronous. It calls the callback immediately.
  //userData = userData.map(getUserItemSync);
  // Return FeedData with resolved references.
  // emulateServerReturn will emulate an asynchronous server operation, which
  // invokes (calls) the "cb" function some time in the future.
  //emulateServerReturn(userData, cb);
}
export function getMajorData(major){
  var majorData = readDocument('majors', major);
  return majorData;
}
export function getFeedbackNum(fbnum){
  var feedbackdata = readDocument('feedback',fbnum);
  return feedbackdata;
}
export function getFeedbackData(){
  return readDocumentCollection('feedback');
}

export function getPageData(user){
  var userData = readDocument('users', user);
  var pageData = readDocument('savePage',userData.savedGraphs);
  return pageData;
}
