
import java.util.*;
import java.io.*;
public class ass1{
    public static void main(String args[])
    {
        Scanner sc= new Scanner(System.in);
        int n=sc.nextInt();
        int a[]=new int[n];
        int even_cnt=0,odd_cnt=0;
        System.out.println("enter elements");
        for(int i=0;i<n;i++)
        {
            a[i]=sc.nextInt();
            if(a[i]%2==0)
                even_cnt++;
            else
                odd_cnt++;
        }
        int alice=0;
        if(even_cnt%2==0)
        {
            while(odd_cnt>0)
            {
                alice++;
                odd_cnt-=2;
            }
        }
        else{
            while(odd_cnt>0)
            {
                odd_cnt--;
                alice++;
                odd_cnt--;
            }
        }
        if(alice%2 == 0)
        {
            System.out.println("Alice wins");
        }
        else{
            System.out.println("Bob wins");
        }
        
    }

}
