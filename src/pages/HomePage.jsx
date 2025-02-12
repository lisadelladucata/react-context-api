import { useEffect, useState, useContext } from "react";
import axios from "axios";
import Form from "../components/Form";
import Character from "../components/Character";
import { useSearchContext } from "../contexts/SearchContext";
import { useAlertContext } from "../contexts/AlertContext";

const initialFormData = {
  name: "",
  race: "",
  ki: "",
  image: "",
  check: false,
};

export default function HomePages() {
  const [characters, setCharacters] = useState([]);
  const [formData, setFormData] = useState(initialFormData);
  const { search } = useSearchContext();

  const handleFormField = (value, fieldName) => {
    setFormData((currentState) => ({
      ...currentState,
      [fieldName]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCharacter = {
      id: characters[characters.length - 1].id + 1,
      name: formData.name,
      race: formData.race,
      ki: formData.ki,
      image: formData.image,
      check: formData.check,
    };
    setCharacters((currentState) => [...currentState, newCharacter]);
    setFormData(initialFormData);
  };

  const handleDelete = (characterId) => {
    setCharacters((currentState) =>
      currentState.filter((character) => character.id !== characterId)
    );
  };

  const fetchPosts = (url = "https://dragonball-api.com/api/characters") => {
    axios.get(url).then((res) => {
      setCharacters(res.data.items);
    });
  };

  useEffect(fetchPosts, []);

  const filtredCard = characters.filter((character) => {
    return character.name.toLowerCase().includes(search.toLowerCase());
  });

  const { setAlertData } = useAlertContext();
  useEffect(() => {
    setAlertData({
      type: "info-class",
      message: "Rimani sempre aggiornato!",
    });
  }, [setAlertData]);

  return (
    <>
      <div className="container">
        <div className="card">
          {filtredCard.length ? (
            filtredCard.map((character) => {
              return (
                <>
                  <Character
                    key={character.id}
                    character={character}
                    handleDelete={handleDelete}
                  />
                </>
              );
            })
          ) : (
            <h2>Not found</h2>
          )}
        </div>
        <div className="form">
          <Form
            handleFormField={handleFormField}
            onSubmit={handleSubmit}
            formData={formData}
          />
        </div>
      </div>
    </>
  );
}
