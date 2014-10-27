Chinwag.ReadyState = SC.State.extend({ 
  
  enterState: function() {
    Chinwag.getPath('mainPage.mainPane').append();
  },

  exitState: function() {
    Chinwag.getPath('mainPage.mainPane').remove();
  }

});

