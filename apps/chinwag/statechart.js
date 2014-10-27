Chinwag.statechart = SC.Statechart.create({

  initialState: 'readyState',

  readyState: SC.State.plugin('Chinwag.ReadyState')
  // someOtherState: SC.State.plugin('Chinwag.SomeOtherState')

});
