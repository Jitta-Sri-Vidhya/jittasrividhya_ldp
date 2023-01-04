let count1=localStorage.getItem('count');
        let count2=sessionStorage.getItem('count');
        const but1=document.querySelector("#lsbutton");
        const but2=document.querySelector("#ssbutton")
        //localStorage.clear();
        but1.addEventListener('click',()=>{
            if(!count1)
            {
                count1=1;
                localStorage.setItem('count',count1);
            }
            else{
            count1=localStorage.getItem('count');
            count1=parseInt(count1)+1;
            localStorage.setItem('count',count1);
            }
            document.getElementById("ls").innerHTML=`<p>local score ${count1}</p>`;
        })

        but2.addEventListener('click',()=>{
            if(!count2)
            {
                count2=1;
                sessionStorage.setItem('count',count2);
            }
            else{
            count2=sessionStorage.getItem('count');
            count2=parseInt(count2)+1;
            sessionStorage.setItem('count',count2);
            }
            document.getElementById("ss").innerHTML=`session score ${count2}`;
        })

        