import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const BookCard = ({ book }) => {
    return (
        <Card
            sx={{
                maxWidth: 180,
                margin: '16px',
            }}
        >
            <CardMedia
                component="img"
                alt={book?.title || '책 표지'}
                height="140"
                image={`https://covers.openlibrary.org/b/id/${book?.cover_id}-L.jpg`}
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/140x190?text=표지+없음';
                }}
            />
            <CardContent>
                <Typography gutterBottom="gutterBottom" variant="h5" component="div">
                    {book?.title || '제목 없음'}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    저자: {book?.author?.name || '알 수 없는 저자'}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default BookCard;
