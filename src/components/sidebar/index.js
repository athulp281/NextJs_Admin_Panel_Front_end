"use client";
import React, { useEffect, useState } from "react";
import SidebarLayout from "./SidebarLayout";
import { usePathname, useRouter } from "next/navigation";
import AuthLayout from "./authLayout/AuthLayout";
import { PATH_AUTH, PATH_DASHBOARD } from "@/route/paths";
import Loader from "../Loader";
import { Box, Container } from "@mui/material";
import TestLayout from "./TestLayout";
import AppSideBar from "./AppSideBar/AppSideBar";

export default function Index({ children }) {
    const pathname = usePathname();
    const router = useRouter();
    const [layout, setLayout] = useState(null);
    const user = localStorage.getItem("user");

    useEffect(() => {
        if (user) {
            router.push(PATH_DASHBOARD.dashboard);
            setLayout({ auth: false, dashboard: true });
        } else {
            router.replace(PATH_AUTH.login);
            setLayout({ auth: true, dashboard: false });
        }
    }, [user, router]);

    if (layout === null) {
        return (
            <Box
                sx={{
                    marginTop: 35,
                }}
            >
                <Loader />
            </Box>
        );
    }

    return (
        <>
            {layout.dashboard ? (
                <AppSideBar>
                    <Box sx={{ overflow: "hidden" }}>{children}</Box>
                </AppSideBar>
            ) : (
                <AuthLayout>{children}</AuthLayout>
            )}
        </>
    );
}
