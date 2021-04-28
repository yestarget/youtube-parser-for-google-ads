function main() {   
    var spreadsheetUrl = "google docs table link";   
    var ss = SpreadsheetApp.openByUrl(spreadsheetUrl);   
    var kwSheet = ss.getSheetByName('Слова');   
    var resSheet = ss.getSheetByName('Ролики');   
    var lastRow = kwSheet.getLastRow();   
    resSheet.clear();   
    var range = kwSheet.getRange(1, 1, lastRow+1, 1);   
    var values = range.getValues();   
    var placements = [];   
    for(var i = 0; 
        values.length - 1 > i; 
        i++) 
        {   var query = values[i][0]; 
        var results = YouTube.Search.list('id,snippet', {q: query, maxResults: 50, type: 'video'});   
        for (var j in results.items) {  var item = results.items[j];   
            placements.push(['youtube.com/watch?v='+item.id.videoId,item.snippet.title]);    
        }   
    }  resSheet.getRange(1, 1, placements.length, 2).setValues(placements); }