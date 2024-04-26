"use client"

import React from 'react'
import { Cat } from '../lib/util'
import Image from 'next/image';

interface CatCardProps {
    cat: Cat
}

const CatCard = ({ cat }: CatCardProps) => {
    return (
        <div>
            <p>Cat ID: {cat._id} (size: {cat.size})</p>
            <Image src={`https://cataas.com/cat/${cat._id}`} alt="cat image" width={360} height={50} className='py-3' />
        </div>
    )
}

export default CatCard