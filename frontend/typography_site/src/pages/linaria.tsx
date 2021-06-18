import { FC } from 'react'
import Link from 'next/link'

import { Menu } from '../components/index' 

const Test: FC = () => {
    return(
        <div>
            <Menu />
            {/* <div style={{width:'200px'}}>
                <svg 
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                >
                <circle style={{fill:'#ccc'}} cx="50" cy="50" r="50"/>
                </svg>
            </div> */}
        </div>
    )
}

export default Test;