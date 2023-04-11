import ScreenSizeChange from "@/hooks/useResizeScreen"
import Logo from "./Logo"

export default function Navigation() {

    return(
        <nav className="flex items-end w-full h-12 pr-4 md:h-24" >
            <ul className="flex w-full">
                <Logo/>
            </ul>
            <ScreenSizeChange/>
        </nav>

    )
}