import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../services/api";

export default function UploadImage() {
  const { carId } = useParams();
  const [image, setImage] = useState("");

  const upload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", image);

    await api({
      method: "post",
      url: `/imagens/${carId}`,
      headers: { "Content-Type": "application/json" },
      data: formData,
    }).then((resp) => console.log(resp));
  };

  return (
    <div>
      <h1>Uploads</h1>
      <form onSubmit={upload}>
        <label>Imagem: </label>
        <input
          type="file"
          name="image"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <br />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}
