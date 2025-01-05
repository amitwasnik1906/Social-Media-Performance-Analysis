'use client';
/* eslint-disable no-use-before-define */

import React from 'react';

interface PostData {
    type: string;
    likes: number;
    comments: number;
    shares: number;
}

interface GraphCardProps {
    postData: PostData[];
}

export default function GraphCard() {

    return(
        <>
        </>
    )
}
