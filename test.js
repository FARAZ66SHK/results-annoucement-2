let result = prompt('Enter your marks')

if( result >= 80){

    document.write('You got A+ grade')
}

else if(result < 80 && result >= 70){

    console.log('you got A grade')
}


else if(result < 70 && result >= 60){

    console.log('you got B grade')
}

else if(result < 60 && result >= 50){

    console.log('you got C grade')
}

else if(result < 50 && result >= 40){

    console.log('you got D grade')
}

else{

    console.log('Unfortunately you are failed')
}