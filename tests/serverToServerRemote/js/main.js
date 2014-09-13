$(window).load(function(){
	$('#btn').click(function(){
		call($('#rgb').val());
	});
});
function call(rgb){
	$.post('server/callGuitarscream.php',{rgb:rgb},function(data){
		console.log(data);
	});
}