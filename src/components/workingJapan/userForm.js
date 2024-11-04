import { useState } from 'react';

const UserForm = () => {
  const [file, setFile] = useState(null);

  const handleSubmit = async (event) => {
    const formData = new FormData(e.currentTarget);
    formData.append('file', file)

    event.preventDefault();
    const res = await fetch('/api/upload', {
      method: 'POST',
      // headers: {
      //   'Content-Type': 'application/json',
      // },
      body: formData,
    });

    const data = await res.json();
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="email"
        placeholder="email"
        required
      />
      <input
        type="text"
        placeholder="name"
      />
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
