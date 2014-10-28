// ==========================================================================
// Project:   Chinwag
// Copyright: @2014 Jabberzac
// ==========================================================================
/*globals Chinwag */

// This is the function that will start your app running.  The default
// implementation will load any fixtures you have created then instantiate
// your controllers and awake the elements on your page.
//
// As you develop your application you will probably want to override this.
// See comments for some pointers on what to do next.
//
Chinwag.main = function main() {
  var statechart = Chinwag.statechart;

  SC.RootResponder.responder.set('defaultResponder', statechart);
  statechart.initStatechart();
};


function main() { Chinwag.main(); }
