import Link from 'next/link';
import Head from 'next/head';
import React from 'react';
import '../static/styles.css';
import 'animate.css';

export const Navbar = (props) => {
    
    return(
        <div className="navbarDiv">
            <Head>
                <title>Cooper French</title>
                <link rel="icon" type="image/x-icon" href="../static/favicon.ico" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="navbarInnerDiv">
                <Link href="/">
                    <span className={"skillsLink" + (props.location === "home" ? " activeLink" : "")}>HOME</span>
                </Link>
                <Link href="/about">
                    <span className={"skillsLink" + (props.location === "about" ? " activeLink" : "")}>ABOUT</span>
                </Link>
                <Link href="/skills">
                    <span className={"skillsLink" + (props.location === "skills" ? " activeLink" : "")}>SKILLS</span>
                </Link>
                <Link href="/projects">
                    <span className={"skillsLink" + (props.location === "projects" ? " activeLink" : "")}>PROJECTS</span>
                </Link>
                <Link href="/links">
                    <span className={"skillsLink" + (props.location === "links" ? " activeLink" : "")}>LINKS</span>
                </Link>
            </div>
        </div>
    )
}