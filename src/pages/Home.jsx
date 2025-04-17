import React from 'react';
import { useBookQuery } from '../hooks/useBook';
import BookCard from '../components/BookCard';
import Spiner from '../components/Spiner';

const Home = () => {
    const { isError, isLoading, error, data } = useBookQuery();

    if (isLoading) {
        return <Spiner />;
    }

    if (isError) {
        return <div>{error.message}</div>;
    }
    console.log(data);
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)' }}>
            {data?.map((book) => (
                <BookCard key={book.id} book={book} />
            ))}
        </div>
    );
};

export default Home;
