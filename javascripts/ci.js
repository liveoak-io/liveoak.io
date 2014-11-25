var job_name = "liveoak";

var CI = function() {
  this.json_url = "https://projectodd.ci.cloudbees.com/job/" + job_name + "/api/json?depth=1";

  $.ajax( {
    url: this.json_url,
    jsonp: 'jsonp',
    dataType: 'jsonp',
    type: 'GET',
    success: this.handle_job_jsonp,
  } );


}

CI.prototype = {
  handle_job_jsonp: function(data) {
    var builds = data.builds;
    console.log(builds);

    $(builds).each( function(i, build) {
      try {
        var sha1 = build.actions[3].lastBuiltRevision.SHA1;
      } catch ( ignored ) {
        sha1 = '';
      }

      var timestamp = new Date( build.timestamp );

      var result = build.result;

      var commitUrl = "https://github.com/liveoak-io/liveoak/commit/" + sha1;

      if ( ! result ) {
        result = "in progress";
      }

      $('#builds').append(
        $('<tr class="' + build.result + '">').append(
          $( '<td>' ).append( build.number )
        ).append(
          $( '<td style="font-size:smaller">' ).append( timestamp.toUTCString() )
        ).append(
          $( '<td>' ).append( $('<a>').attr('href', build.url).append( result.toLowerCase() ) )
        ).append(
          $( '<td>' ).append( $('<a>').attr('href', commitUrl).append( sha1.substring(0,7) ) )
        )
      );
    } );
  },
}

var ci = new CI();
