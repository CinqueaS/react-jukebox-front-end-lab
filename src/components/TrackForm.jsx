import { useState } from 'react';

const TrackForm = (props) => {

  const initialState = {
    title: '',
    artist: '',
    link: '',
  }
  const [formData, setFormData] = useState(props.selected ? props.selected : initialState)

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmitForm = (evt) => {
    evt.preventDefault();
    if (props.selected) {
      props.handleUpdateTrack(formData, props.selected._id)
    } else {
    props.handleAddTrack(formData);
  }
}

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <label htmlFor="title"> Title </label>
        <input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <label htmlFor="artist"> Artist </label>
        <input
          id="artist"
          name="artist"
          value={formData.artist}
          onChange={handleChange}
        />
        <label htmlFor="link"> Link </label>
        <input
          id="link"
          name="link"
          value={formData.link}
          onChange={handleChange}
        />
        <button type="submit"> {props.selected ? 'Update Track' : 'Add New Track'} </button>

      </form>
    </div>
  );
};

export default TrackForm;
