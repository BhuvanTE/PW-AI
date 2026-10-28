let num=1234

let denominations=[2000,500,200,100,50,20,10,5,2,1];

for(let i=0;i<denominations.length;i++){
    let count=Math.floor(num/denominations[i]);
    if(count>0){
        console.log(denominations[i]+" * "+count+" = "+(denominations[i]*count));
        num=num%denominations[i];
    }
}