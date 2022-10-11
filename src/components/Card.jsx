import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
export default function BasicCard({ className, bgColor, color, children }) {
  return (
    <Card sx={{ minWidth: 20 }} className={className} style={{ backgroundColor: `${bgColor}`, color: `${color}`, position: 'relative' }}>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
}
