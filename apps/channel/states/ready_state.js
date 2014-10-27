Channel.ReadyState = SC.State.extend({ 
  
  enterState: function() {
    Channel.getPath('mainPage.mainPane').append();
  },

  exitState: function() {
    Channel.getPath('mainPage.mainPane').remove();
  }

});

