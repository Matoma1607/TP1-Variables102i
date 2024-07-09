/*Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666*/

for (let i = 1; i <= 30; i++){
    if (i === 5){
        document.write('5'.repeat(i - 1) + '4' + '<br>');
    } else{
        document.write(String(i).repeat(i) + '<br>');
    }

}