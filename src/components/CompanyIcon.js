import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

export const CompanyIcon = () => {
    return (
        <Box
            sx={{
                padding: 1,
                display: "flex",
                justifyContent: "center",
                marginTop: 2,
            }}
        >
            <Image
                width={150}
                height={40}
                src="https://teaminterval.in/wp-content/uploads/2022/03/interval-logo.png"
                alt="Interval Logo"
            />
        </Box>
    );
};
