const TrackList = (props) => {
    const tracks = props.trackList.map((track) => ( <a key={track._id} onClick={() => props.updateSelected(track)}>
        <li>{track.title}</li>
    </a>))

    return(
        <div>
            <h1>Track List</h1>
            {!props.trackList.length ? <h2>Nothing playing</h2> : <ul>{tracks}</ul>}
        </div>
    )
}

export default TrackList