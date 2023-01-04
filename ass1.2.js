function arrow()
        {
            const s1=document.getElementById('firstname').value;
            const s2=secondname.value;
            alert(ans(s1,s2));
            document.write("The first characters are:"+ans(s1,s2));
        }
        const ans=(s1,s2)=>s1.charAt()+s2.charAt(0);
        click.onclick=arrow