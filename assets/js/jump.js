// if local network host is available then jump to local network host
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://172.18.35.126/balyspusys/");
xhr.send();
if (xhr.status == 200)
{
    location = 'http://172.18.35.126' + location.pathname
}