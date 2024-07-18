import styled from '@emotion/styled';
import { useState } from 'react';
import Modal from './Modal';
import InnerLayout from '@src/InnerLayout';

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
    <InnerLayout>
      <h2>마음을 전하실 곳</h2>
      <StyledText>
        <p>필요하신 분들을 위해 계좌를 안내드립니다.</p>
        <p>너그러운 이해와 양해를 바라며</p>
        <p>보내주신 관심과 사랑에 감사드립니다.</p>
      </StyledText>
      <StyledHostWrap>
        <div className="host">
          <p>신랑 아버지</p>
          <div>
            <p>김정재</p>
            {/* <div>
              <input type="tel" />
              <input type="sms" />
            </div> */}
            <button onClick={() => openModal('John Doe', '123-456-789')}>
              <div className="account">축하송금 안내</div>
            </button>
          </div>
          <p>신랑 어머니</p>
          <div>
            <p>이지선</p>
            <button onClick={() => openModal('Jane Smith', '987-654-321')}>
              <div className="account">축하송금 안내</div>
            </button>
          </div>
        </div>
        <div className="host">
          <p>신부 아버지</p>
          <div>
            <p>박인기</p>
            <button onClick={() => openModal('Alice Brown', '555-444-333')}>
              <div className="account">축하송금 안내</div>
            </button>
          </div>
          <p>신부 어머니</p>
          <div>
            <p>이영선</p>
            <button onClick={() => openModal('Bob White', '666-777-888')}>
              <div className="account">축하송금 안내</div>
            </button>
          </div>
        </div>
        {modalContent && (
          <Modal show={isModalOpen} onClose={closeModal}>
            <p>이름: {modalContent.name}</p>
            <p>계좌번호: {modalContent.accountNumber}</p>
          </Modal>
        )}
      </StyledHostWrap>
    </InnerLayout>
  );
};

export default MainHost;

const StyledHostWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  .host {
    display: flex;
    flex-direction: column;
    padding: 16px;
    border: 1px solid #000;
    > div > p {
      margin-bottom: 8px;
    }
    > p {
      margin-bottom: 8px;
      font-size: 12px;
      margin-bottom: 8px;
    }
    button {
      &:first-of-type {
        margin-bottom: 32px;
      }
      p {
        font-size: 16px;
      }
    }
    .account {
      border: 1px solid #000;
      padding: 10px;
      border-radius: 20px;
    }
  }
`;

const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
`;
