import { useState } from 'react';
import { useRouter } from 'next/router';
import PageRank from 'google-pagerank';

const PageRankChecker = () => {
    const router = useRouter();
    const [url, setUrl] = useState('');
    const [pagerank, setPagerank] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const rank = await PageRank(url);
            setPagerank(rank);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter a URL"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />
                <button type="submit">Check Page Rank</button>
            </form>
            {pagerank && <p>Page Rank: {pagerank}</p>}
        </div>
    );
};

export default PageRankChecker;
