import Link from 'next/link'
import React from 'react'



const NoScrollLink = ({ children, href, passHref, as }) => (
    <Link href={href} passHref={passHref} as={as} scroll={true}>
        {children}
    </Link>
)

export default NoScrollLink;