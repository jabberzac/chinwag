Channel.statechart = SC.Statechart.create({

  initialState: 'readyState',

  readyState: SC.State.plugin('Channel.ReadyState')
  // someOtherState: SC.State.plugin('Channel.SomeOtherState')

});
