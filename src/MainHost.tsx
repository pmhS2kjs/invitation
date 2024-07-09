import styled from '@emotion/styled';
import { useState } from 'react';
import Modal from './Modal';

interface ModalContent {
  name: string;
  accountNumber: string;
}

const MainHost = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ModalContent | null>(null);

  const openModal = (name: string, accountNumber: string) => {
    setModalContent({ name, accountNumber });
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };
  return (
    <StyledHostWrap>
      <h2>타이틀</h2>
      <div className="host">
        <p>ㅅㄹㅊ</p>
        <button onClick={() => openModal('John Doe', '123-456-789')}>
          <p>ㅇㅂㄴ</p>
          <div>ㄱㅈ</div>
        </button>
        <button onClick={() => openModal('Jane Smith', '987-654-321')}>
          <p>ㅇㅁㄴ</p>
          <div>ㄱㅈ</div>
        </button>
      </div>
      <div className="host">
        <p>ㅅㅂㅊ</p>
        <button onClick={() => openModal('Alice Brown', '555-444-333')}>
          <p>ㅇㅂㄴ</p>
          <div>ㄱㅈ</div>
        </button>
        <button onClick={() => openModal('Bob White', '666-777-888')}>
          <p>ㅇㅁㄴ</p>
          <div>ㄱㅈ</div>
        </button>
      </div>
      {modalContent && (
        <Modal show={isModalOpen} onClose={closeModal}>
          <p>이름: {modalContent.name}</p>
          <p>계좌번호: {modalContent.accountNumber}</p>
        </Modal>
      )}
    </StyledHostWrap>
  );
};

export default MainHost;

const StyledHostWrap = styled.div`
  display: flex;
  .host {
    display: flex;
    flex-direction: column;
    padding: 10px;
    border: 1px solid #000;
    margin: 10px;
    p {
      font-weight: bold;
    }
    div {
      display: flex;
      justify-content: space-between;
      div {
        border: 1px solid #000;
        padding: 5px;
      }
    }
  }
`;
