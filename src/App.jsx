import { useState, useEffect } from "react";
import * as trackService from './services/trackService'
import TrackList from "./components/TrackList";
import TrackDetail from "./components/TrackDetail";
import TrackForm from "./components/TrackForm";

const App = () => {
  const [trackList, setTrackList] = useState([])
  const [selected, setSelected] = useState(null)
  
  useEffect(() => {
    const getTracks = async () => {
      try{
        const tracks = await trackService.index()
        if (tracks.error) {
          throw new Error(track.error)
        }
        setTrackList(tracks)
      } catch (error) {
        console.log(error)
      }
    }
    getTracks()
  }, [])

  const updateSelected = (track) => {
    setSelected(track)
  }

  const [isFormOpen, setIsFormOpen] = useState(false)

  const handleFormView = (track) => {
    if (!track.title) {
      setSelected(null);
    } 
    setIsFormOpen(!isFormOpen);
  };

  const handleAddTrack = async (formData) => {
    try {
      const newTrack = await trackService.create(formData)
      if (newTrack.error) {
        throw new Error(newTrack.error)
      }
      setTrackList([newTrack, ...trackList])
      setIsFormOpen(false)
    } catch (error) {
      console.log(error)
    }
  }

  const handleUpdateTrack = async (formData, trackId) => {
    try {
      const updatedTrack = await trackService.updateTrack(formData, trackId);
  
      if (updatedTrack.error) {
        throw new Error(updatedTrack.error);
      }
  
      const updatedTrackList = trackList.map((track) =>
        track._id !== updatedTrack._id ? track : updatedTrack
      );
      setTrackList(updatedTrackList);
      setSelected(updatedTrack);
      setIsFormOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoveTrack = async (trackId) => {
    try {
      const deletedTrack = await trackService.deleteTrack(trackId);

      if (deletedTrack.error) {
        throw new Error(deletedTrack.error);
      }

      setTrackList(trackList.filter((track) => track._id !== deletedTrack._id));
      setSelected(null);
      setIsFormOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <TrackList trackList={trackList} updateSelected={updateSelected} handleRemoveTrack={handleRemoveTrack} handleFormView={handleFormView} isFormOpen={isFormOpen} />
    {isFormOpen ? (
      <TrackForm selected={selected} handleAddTrack={handleAddTrack} handleUpdateTrack={handleUpdateTrack}/>
    ) : (
      <TrackDetail selected={selected} handleFormView={handleFormView} handleRemoveTrack={handleRemoveTrack}/>
    )}
    
    </>
    );
};

export default App;
