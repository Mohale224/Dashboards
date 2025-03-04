'use client';

import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianAxis, ResponsiveContainer, CartesianGrid} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription} from '@/components/ui/card';
import data from '@/components/data/analytics';
const AnalyticsChart = () => {
    return (
    <Card>
        <CardHeader>
            <CardTitle>Analyics For This Year</CardTitle>
            <CardDescription>Views Per Month</CardDescription>
            </CardHeader>
            <CardContent>
                <div style={{width: '100%', height: 300}}>
                    <ResponsiveContainer>
                        <LineChart width={1100} height={300} data={data}>
                            <Line type='monotone' dataKey='uv' stroke='#8884d8'/>
                            <CartesianGrid stroke='#ccc'/>
                            <XAxis dataKey='name'/>
                            <YAxis/>
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
    </Card>
    );
};

export default AnalyticsChart;