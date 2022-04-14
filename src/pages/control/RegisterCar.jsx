import { useNavigate } from "react-router-dom";
import RegisterForm from "../../modules/RegisterForm";

export default function RegisterCar() {
  const Navigate = useNavigate();

  function createPost(veiculo) {
    fetch(`http://localhost:4000/cars`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(veiculo),
    }).then((resp) => {
      Navigate("/painel");
    });
  }

  return (
    <div>
      <h1>Cadastrar veículo</h1>
      <RegisterForm
        handleSubmit={createPost}
        btnText="Cadastrar veículo"
      ></RegisterForm>
    </div>
  );
}
