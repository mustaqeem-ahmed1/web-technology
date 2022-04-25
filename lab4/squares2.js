let num1 = prompt ("Enter the number");
let num2="";
for(let i=1;i<=num1;i++)
{
   let temp = i*i;
   let res = temp.toString();
   num2+= `(${i},${temp})`;
}

alert(num2)