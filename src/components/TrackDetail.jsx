const TrackDetail = (props) => {
    if (!props.selected)
        return (
          <div>
            <h1>Nothing to see here</h1>
          </div>
        );
    
      return (
        <div>
          <h1>{props.selected.title}</h1>
          <h2>Composer {props.selected.artist}</h2>
          <h2>
            {props.selected.link}
          </h2>
          <button onClick={() => props.handleFormView(props.selected)}>Edit</button>
          <button onClick={() => props.handleRemoveTrack(props.selected._id)}>Delete</button>
        </div>
      );
    };

export default TrackDetail