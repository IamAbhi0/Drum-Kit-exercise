function add(no1,no2){
    return no1+no2;
}

function sub(no1,no2){
     return no1-no2 ;
}

function calc(no1,no2,operator){
  return (operator(no1,no2) );


}
calc(10,5,sub);
