import { FC } from 'react'
import Link from 'next/link'

const Menu: FC = () => {

    return (
        <div style={{"backgroundColor":"#bebebe","position":"fixed","right":"20%","width":"100px","display":"grid","placeItems":"center"}}>
            <Link href={'/'}>
                <a>
                    home
                </a>
            </Link>
            <div></div>
            <Link href={'/linaria'}>
                <a>
                    linaria
                </a>
            </Link>
            <div></div>
            <Link href={'/font'}>
                <a>
                    font
                </a>
            </Link>
            <div></div>
            <Link href={'/firebase'}>
                <a>
                    firebase
                </a>
            </Link>
            <div></div>
            <Link href={'/hetaji'}>
                <a>
                    hetaji
                </a>
            </Link>
        </div>
    )
} 

export default Menu;