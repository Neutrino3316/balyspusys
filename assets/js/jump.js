// console.log(location)

if (location.host != '172.18.35.126')
{
    location = 'http://172.18.35.126' + location.pathname
}