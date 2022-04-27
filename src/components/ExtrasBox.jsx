import "../styles/ExtrasBox.css";
import { BsCheckCircleFill } from "react-icons/bs";
import { Row, Col } from "react-bootstrap";

export default function ExtrasBox({ extras }) {
  return (
    <div id="ExtrasBox">
      <div className="top">informações</div>
      <div className="extras">
        <div className="extras-body">
          <div className="extras-title">Opcionais:</div>
          <Row>
            {Array.isArray(extras)
              ? extras.map((extra) => (
                  <Col md={3}>
                    <div className="extras-tem">
                      <div className="extras-icon">
                        <BsCheckCircleFill />
                      </div>
                      <div className="extras-text">{extra}</div>
                    </div>
                  </Col>
                ))
              : []}
          </Row>
          <Row>
            <div className="detail">
              <div className="detail-title">Detalhes:</div>
              <div className="detail-text">
                VCARS SEMINOVOS - Reservamos o direito de corrigir quaisquer
                erros de digitação ou modificar a qualquer momento sem aviso o
                preço e também as informações do anúncio. Antes da compra,
                sempre consultar primeiro com um vendedor.
              </div>
            </div>
          </Row>
        </div>
      </div>
    </div>
  );
}
