
$(function() {

  describe('RSS Feeds', function() {


    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    it('urls are defined', function() {
      allFeeds.forEach(function(feed) {
        var urls = feed.url;
        expect(urls).toBeDefined();
        expect(urls.length).not.toBe(0);
      });
    });

    it('names are not undefined', function() {
      allFeeds.forEach(function(feed) {
        var names = feed.name;
        expect(names).toBeDefined();
        expect(names.length).not.toBe(0);
      });
    });



    describe('The Menu', function() {

      it('is hidden by default', function() {
        expect($('body').hasClass('menu-hidden')).toBe(true);
      });

      it('changes visibility when clicked', function() {
        var hmbrg = $('.menu-icon-link');

        hmbrg.click(); // sims click on hamburger button
        expect($('body').hasClass('menu-hidden')).toBe(false);


        hmbrg.click(); // sims another click on hamburger button
        expect($('body').hasClass('menu-hidden')).toBe(true);

      });

    });


    describe('Initial Entries', function() {



      beforeEach(function(done) {
        loadFeed(0, function() {  // sims async loadFeed
          done();
        });
      });

      it('displays after loadFeed is called', function() {
        expect(('.feed .entry').length).toBeGreaterThan(0);   // checks for loadFeed to work
      });
    });


    describe('New Feed Selection', function() {

      var priorState;
      var currentState;

      beforeEach(function(done) {
        loadFeed(0, function() {
          priorState = $('.entry').html(); // saves previous loadFeed

          loadFeed(1, function() { // reloads loadFeed            done();
          });
        });
      });

      it('content changes when loadFeed is called', function() {
        currentState = $('.entry').html();
        expect(currentState).not.toBe(priorState);  // determines whether loadFeed correctly loaded new content
      });

    });

  });

});
