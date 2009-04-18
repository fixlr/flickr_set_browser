function jsonFlickrApi(rsp) {
	var A = [];
	for (var i=0; i<rsp.photosets.photoset.length; i++){
		var s = rsp.photosets.photoset[i];
		A.push('<li>'+s.title._content+' <small>('+s.photos+')</small></li>');
	}
	document.getElementById('flickr_sets').innerHTML = A.join('');
}

function jsonFlickrApiPhotoset(rsp) {
	var A = [];
	for (var i=0; i<rsp.photoset.photo.length; i++){
		var p = rsp.photoset.photo[i];
		A.push('<li><img src="'+flickr_thumb(p)+'" height="75" width="75" /></li>');
	}
	document.getElementById('flickr_photos').innerHTML = A.join('');
}

function flickr_thumb(p) {
	return 'http://farm'+p.farm+'.static.flickr.com/'+p.server+'/'+p.id+'_'+p.secret+'_t.jpg';
}
