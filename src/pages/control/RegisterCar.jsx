import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import RegisterForm from "../../modules/RegisterForm";

export default function RegisterCar() {
  const Navigate = useNavigate();

  function createPost(car) {
    api({
      method: "post",
      url: `/cars`,
      data: JSON.stringify(car),
    }).then(Navigate(`/painel`));
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
