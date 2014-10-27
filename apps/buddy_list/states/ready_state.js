BuddyList.ReadyState = SC.State.extend({ 
  
  enterState: function() {
    BuddyList.getPath('mainPage.mainPane').append();
  },

  exitState: function() {
    BuddyList.getPath('mainPage.mainPane').remove();
  }

});

