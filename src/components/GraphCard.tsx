'use client';

import React from 'react';
import { BarChart } from '@mui/x-charts';

interface PostData {
    type: string;
    likes: number;
    comments: number;
    shares: number;
}

interface GraphCardProps {
    postData: PostData[];
}

export default function GraphCard({ postData = [] }: GraphCardProps) {

    const series = [
        {
            data: postData.map((item: PostData) => item.likes),
        },
        {
            data: postData.map((item: PostData) => item.comments),
        },
        {
            data: postData.map((item: PostData) => item.shares),
        },
    ];

    console.log(series);

    return (
        <div className="w-full h-96">
            <BarChart
                xAxis={[
                    {
                        data: ['Carousel', 'Reel', 'Static Image'],
                        scaleType: 'band',
                    },
                ]}
                
                series={series}
                height={400}
                slotProps={{
                    legend: {
                        direction: 'row',
                        position: { vertical: 'bottom', horizontal: 'middle' },
                    },
                }}
            />
        </div>
    );
}
