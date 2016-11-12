import {readDocument, writeDocument, addDocument} from './database.js';

/**
 * Emulates how a REST call is *asynchronous* -- it calls your function back
 * some time in the future with data.
 */
function emulateServerReturn(data, cb) {
  setTimeout(() => {
    cb(data);
  }, 4);
}

export function postFeedback(user, contents){
  var newFeedback = {
    "contents": contents
  };
  newFeedback = addDocument('feedback', newFeedback);

  writeDocument('feedback', newFeedback);

  emulateServerReturn(newFeedback);
}
