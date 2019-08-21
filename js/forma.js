// Map your choices to your option value
var lookup = {
    'Instagram': ['Followers', 'Likes', 'Views', 'Comments', 'Story views', 'Saves', 'Live video likes'],
    'Facebook': ['Followers', 'Page likes','Reactions', 'Fb videoviews', 'Comments', 'Ratings'],
    'Twitter': ['Retweets', 'Likes', 'Comments', 'Views', 'Poll votes'],
    'Youtube': ['Views', 'Watchtime', 'Likes', 'Subscribes', 'Comments', 'Shares', 'Favourites'],
 };

// When an option is changed, search the above for matching choices
$('#options').on('change', function() {
    // Set selected option as variable
    var selectValue = $(this).val();
 
    // Empty the target field
    $('#choices').empty();
    
    // For each chocie in the selected option
    for (i = 0; i < lookup[selectValue].length; i++) {
       // Output choice in the target field
       $('#choices').append("<option value='" + lookup[selectValue][i] + "'>" + lookup[selectValue][i] + "</option>");
    }
 });