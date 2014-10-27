BuddyList.statechart = SC.Statechart.create({

  initialState: 'readyState',

  readyState: SC.State.plugin('BuddyList.ReadyState')
  // someOtherState: SC.State.plugin('BuddyList.SomeOtherState')

});
