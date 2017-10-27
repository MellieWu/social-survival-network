var socket = io();
var onlineuser = [];
var offlineuser = [];
var alluser = [];
var color=null;

socket.on('connect', function (data) {
   socket.emit('usersList', { name: getCookie('username') });   
});

socket.emit('usersListReq');

socket.on('alllUsers', function(result){
  for(var x in result){
    console.log(x);

    color=changeColor(result[x].status);
    
  	if(result[x].onoff == "online")
	   $('#onlineusers').append('<a href=\"/privatechat?receiver='+ 
      result[x].username +'\"><b style="float:left;font-size:200%">' + 
      result[x].username + '</b><i class="fa fa-circle" aria-hidden="true" color="green"></i><b style="float:right;font-size:200%">' + result[x].onoff + '</b><hr/>');
    else
       $('#offlineusers').append('<a href="/privatechat?receiver="'+ 
        result[x].username +'><b style="float:left;font-size:200%;">' + 
        result[x].username + '</b><i id="avatar" class="avatar fa fa-user fa-2x"></i><b style="float:right;font-size:200%;">' + result[x].onoff + '</b><hr/>');	

  }	

 

  
});

function changeColor(status){
  switch (status){
    case 'OK': return 'green';
    case 'Help': return 'yellow';
    case 'Emergency': return 'red';
    default: return 'black';
  }
}
