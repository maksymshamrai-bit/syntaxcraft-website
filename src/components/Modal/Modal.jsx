import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Modal.css';

function ModalWindow({ onClose }) {
    
  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Доступні сервери до гри</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <h2>Minecraft Java Edition</h2>
          <div className="server-info">
            <h3>Leontar</h3>
            <p className="serv-ip">IP: leontar.aternos.me</p>
          </div>
          <div className="server-info">
            <h3>Frosty Lagoon</h3>
            <p className="serv-ip">Приватний сервер. Наразі недоступний.</p>
          </div>
          <div className="server-info">
            <h3>PlaceIndustrial</h3>
            <p className="serv-ip">У розробці.</p>
          </div>
          <h2>Minecraft Bedrock Edition</h2>
            <div className="server-info">
                <h3>Frosty Lagoon</h3>
                <p className="serv-ip">IP: frostylagoon.aternos.me</p>
                <p className="serv-ip">Port: 19132</p>
            </div>
            <div className="server-info">
                <h3>Leontar</h3>
                <p className="serv-ip">IP: lwecia.aternos.me</p>
                <p className="serv-ip">Port: 19132</p>
            </div>
        </Modal.Body>

        <Modal.Footer>
          <Button className="btn btn-secondary" onClick={onClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
}

export default ModalWindow;