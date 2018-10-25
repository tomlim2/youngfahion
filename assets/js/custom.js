$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '349360806',
        limit: 10,
        resolution: 'standard_resolution',
        accessToken: '349360806.1677ed0.1fdaee7b7e4d43d88c5bc90e8244c2f4',
        sortBy: 'most-recent',
        template: '<div class="col-sm-set instaimg"><a href="{{link}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();


});
