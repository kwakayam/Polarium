// Private Vars
var self;
var VARS;
//type of window
exports.type = "detail";

// Template Constructor
exports.createView = function() {

    // Global VARS
    VARS  = require('/common/globals');
    

    // Create Object Instance, A Parasitic Subclass of Observable
    self = Ti.UI.createView({
        backgroundColor: 'transparent',
        layout: 'vertical',
        visible: false
    });
    
    // UI
    
    return self;
};


// Show View
exports.showView = function(){
    
    var lbl = Ti.UI.createLabel({
        text:'About',
        height:'auto',
        width:'auto',
        color:'#000'
    });

    lbl.callback = function(){
        alert("es geht doch");
    };

    self.add(lbl);
    
    // Show Stuff
    self.show();
};


// Hide View
exports.hideView = function(){

    VARS.GV.removeAllChildren(self);

    // Hide Stuff
    self.hide();
};

