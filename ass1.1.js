let arr=[1,2,3,4,5];
        function num(array,cal)
        {
            let sum=0;
            for(let i=0;i<array.length;i++)
            {
                let value =cal(array[i]);
                sum=sum+value;
            }
            return sum;
        }
        function cal(a)
        {
            return a*2;
        }
        let sum=num(arr,cal);
        document.write("the total sum="+sum);