import React from "react";
import Hero from "../Hero/Hero";
import SubHero from "../SubHero/SubHero";
import Footer from "../Footer/Footer";

export default function Home(){
    return(
        <main>
            <Hero />
            <SubHero />
            <Footer title="Resume" about="Read more about my experience." btnText="Show resume" link="/resume" />
        </main>
    )
}