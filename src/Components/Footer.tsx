import { ArrowUp } from "lucide-react";


function Footer() {


    return (
        <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify justify-between items-center">
            {""}
            <p className="text-sm text-muted-foreground"> 
                &copy; {new Date().getFullYear()} Ryan Sefrioui. All rights reserved.
            </p>

            <a href="#hero" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                <ArrowUp />
            </a>
        </footer>
    )
}

export default Footer;