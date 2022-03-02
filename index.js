const calculateTemp = () =>{

    const numberTemp = document.getElementById('temp').value;

    // console.log(numberTemp);

    const tempSeleced = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSeleced.selectedIndex].value;

    const celToFah = (cel) =>{
        let fahrenheit =  Math.round((cel*9/5) +32);
        return fahrenheit;
    }

    const FahtoCel = (fah) =>{
        let Celsius =  Math.round((fah-32)*5/9);
        return Celsius  ;
    }

    let result;

    if(valueTemp == 'cel'){
        result = celToFah(numberTemp);
        document.getElementById('resultContainer').innerHTML= `= ${result} Fahrenheit`;
    }
    else{
        result = FahtoCel(numberTemp);
        document.getElementById('resultContainer').innerHTML= `= ${result} Celsius`;
    }

}