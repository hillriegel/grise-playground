import Image from 'next/image';

const formatNumber = (n) => {
    return new Intl.NumberFormat('en-US').format(n);
}

export default function DisplayItems({items, loading}) {

    return (
        <>
        {loading && <p>Loading ...</p>}


        {!loading && 
            <div style={{width: '100%', backgroundColor: '#88aaff', borderRadius: '7px', padding: '20px'}}>
            <table style={{width: '100%'}}>
                <thead>
                    <tr>
                        <td><h2>Artist</h2></td>
                        <td><h2>Album</h2></td>
                        <td><h2>Followers</h2></td>
                        <td><h2>Genre</h2></td>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => {
                        return (
                        <tr key={item.name}>
                            <td><h3>{item.name}</h3></td>
                            <td><Image src={item.images[0].url} width="100" height="100" alt="album cover"/></td>
                            <td>{formatNumber(item.followers.total)}</td>
                            <td>{item.genres.join(', ')}</td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
            </div>
        }
        </>
    )
}