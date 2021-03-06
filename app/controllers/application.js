import Ember from 'ember';

export default Ember.Controller.extend({
  init() {
    this._super();

    $.browserDetection({
      addClasses: true
    });

    // Tooltip
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
      $('.data-toggle-tooltip').tooltip();
      $('.data-toggle-tooltip').on('click', function(){
        $('.data-toggle-tooltip').tooltip('hide')
      });
    });

    // Popover
    $(function () {
      $('[data-toggle="popover"]').popover();
    });

    // ProgressJS
    $(function () {
      $('.progressjs-example').click(function() {
        progressJs().start().autoIncrease(1, 100);
        setTimeout(function() {
          progressJs().end();
        }, 5000);
      });
    });

    // Datetimepicker
    $(function () {
      $('.datetimepicker').datetimepicker({
        format: 'YYYY-MM-DD',
        icons:
        {
          time: 'fa fa-clock-o',
          date: 'fa fa-calendar',
          up: 'fa fa-angle-up fa-lg',
          down: 'fa fa-angle-down fa-lg',
          previous: 'fa fa-angle-left fa-lg',
          next: 'fa fa-angle-right fa-lg',
          today: 'fa fa-calendar-o',
          clear: 'fa fa-times-circle',
          close: 'fa fa-times-circle'
        }
      });
    });

    // Typeahead.js
    $(function () {
      var demoData = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.whitespace,
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        prefetch: 'demo/demo-data.json'
      });
      // Demo
      $('#demo-typeahead .typeahead').typeahead(null, {
        name: 'demoData',
        source: demoData
      });
    });

    // File select
    $(function() {
      // We can attach the `fileselect` event to all file inputs on the page
      $(document).on('change', ':file', function() {
        var input = $(this),
            numFiles = input.get(0).files ? input.get(0).files.length : 1,
            label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
        input.trigger('fileselect', [numFiles, label]);
      });
      // We can watch for our custom `fileselect` event like this
      $(document).ready( function() {
        $(':file').on('fileselect', function(event, numFiles, label) {
            var input = $(this).parents('.input-group').find(':text'),
              log = numFiles > 1 ? numFiles + ' files selected' : label;
            if( input.length ) {
              input.val(log);
            } else {
              if( log ) alert(log);
            }
        });
      });
    });

    // Dropdown-menu multilevel
    $(function () {
      $('.dropdown-menu-multilevel').on('click', function(event){
        var events = $._data(document, 'events') || {};
        events = events.click || [];
        for(var i = 0; i < events.length; i++) {
            if(events[i].selector) {
    
                //Check if the clicked element matches the event selector
                if($(event.target).is(events[i].selector)) {
                    events[i].handler.call(event.target, event);
                }
    
                // Check if any of the clicked element parents matches the 
                // delegated event selector (Emulating propagation)
                $(event.target).parents(events[i].selector).each(function(){
                    events[i].handler.call(this, event);
                });
            }
        }
        event.stopPropagation(); //Always stop propagation
      });
    });

  }

});
