import { Typography, Stack, Paper, Card } from "@mui/material"
import styled from "@emotion/styled"
import { logos } from "./constants"
import { useState, useEffect } from "react"
import axios from "axios"
const StyledPaper = styled(Paper)(()=>(
    {
        width:"150px",
        height:"170px",
        boxSizing:"border-box",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        padding:"24px",
        gap:"12px",
        background: "#FFFFFF",
        borderRadius:"4px"
    }
))
const StyledCard = styled(Card)(()=>(
    {
        width:"700px",
        display:"Grid",
        gridTemplateColumns: "auto auto auto auto",
        padding:"50px 20px",
        gap:"20px"
    }
))

interface Data {
    id:number
    cryptoName:string
    image:string
    value:string
}

export const Crypto = () => {

    const [data,setData] = useState<Data[]>([])
    useEffect(()=>{
        axios.get("http://localhost:3000/crypto")
        .then(res=>setData(res.data))
        .catch(err=>console.log(err))
    },[])
    return (
        <StyledCard >
        {
            data.map((data) => (
                
                    <Stack gap="20px" direction="row" >
                    <StyledPaper>
                        <img src={logos[data.image]} alt={data.cryptoName}></img>
                        <Typography variant="h6">{data.cryptoName}</Typography>
                        <Typography variant="caption">{data.value}</Typography>
                    </StyledPaper>
                    </Stack>
                    
            ))
        }
        </StyledCard>
        
    )
}

