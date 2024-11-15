const TrackList = (props) => {
    const tracks = props.trackList.map((track) => ( <a key={track._id} onClick={() => props.updateSelected(track)}>
        <li>{track.title} <button>Play</button> <button onClick={() => props.handleRemoveTrack(track._id)}>Delete</button></li>
    </a>))

    return(
        <div>
            <button onClick={props.handleFormView}>
                {props.isFormOpen ? 'Close Form' : 'Add a new Track'}
            </button>
            <h1>Track List</h1>
            {!props.trackList.length ? <h2>Nothing playing</h2> : <ul>{tracks}</ul>}
        </div>
    )
}

export default TrackList