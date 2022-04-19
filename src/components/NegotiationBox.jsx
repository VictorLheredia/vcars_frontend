import "../styles/NegotiationBox.css";

export default function NegotiationBox() {
  return (
    <div id="NegotiationBox">
      <div className="price">R$ 53.000,00</div>
      <div className="negotiation">
        <span>aproveite a oferta!</span>
        <form>
          <input
            className="input"
            name="name"
            type="text"
            placeholder="Nome:"
            value=""
          ></input>
          <input
            className="input"
            name="email"
            type="email"
            placeholder="E-mail:"
            value=""
          ></input>
          <input
            className="input"
            name="tel"
            type="tel"
            placeholder="Tel/Cel:"
            value=""
            pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}"
            required
            maxlength="11"
          ></input>
          <input
            className="input note"
            name="note"
            type="text"
            placeholder="Obsevações:"
            value=""
          ></input>
          <div className="contact-by">Entrar em contato por:</div>
          <div className="box-radio">
            <div className="radio">
              <input type="radio" name="tel" value=""></input>
              <label>Tel/Cel</label>
            </div>
            <div className="radio">
              <input type="radio" name="whatsapp" value=""></input>
              <label>WhatsApp</label>
            </div>
            <div className="radio">
              <input type="radio" name="email" value=""></input>
              <label for="contactChoice3">E-mail</label>
            </div>
          </div>
          <div className="negotiation-button">
            <button>enviar negociação</button>
          </div>
        </form>
      </div>
    </div>
  );
}
