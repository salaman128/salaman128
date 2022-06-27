import { CardActionArea, CardMedia } from "@mui/material";
import React from "react";
import Typed from "react-typed";
import bw from "./bw.jpg"


export default function Header(){
    return (
        <div className="header">
            <div className="main-info">
            {/* <h1 className="my-name">Nandha Kumar</h1> */}

            <CardActionArea>
                <CardMedia
                sx={{height: "40vh"}}
                component="img"
                image={bw}
                alt="green iguana"
                />
            </CardActionArea>

            {/* <Typed 
                style={{position: "absolute", right: 5}}
                className="typed-text"
                strings={[
                    "App Dev",
                    "AI",
                    "Books",
                    "Hacking",
                    "Data Analytics",
                    "Data Science",
                    "Electrical",
                    "Electronics",
                    "Film Making",
                    "Movies",
                    "Web Dev",
                ]}
                typeSpeed={40}
                backSpeed={60}
                loop
            /> */}
            
            </div>
        </div>
    )
}
