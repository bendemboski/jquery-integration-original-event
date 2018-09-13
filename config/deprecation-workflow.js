/* global window */
window.deprecationWorkflow = window.deprecationWorkflow || {};
window.deprecationWorkflow.config = {
  workflow: [
    { handler: "throw", matchId: "ember-views.event-dispatcher.jquery-event" }
  ]
};
