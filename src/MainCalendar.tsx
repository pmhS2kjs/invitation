// import { css } from '@emotion/react';
import styled from '@emotion/styled';
import InnerLayout from '@src/InnerLayout';
import { useEffect, useState } from 'react';

const MainCalendar = () => {
  const [dDay, setDDay] = useState<number | null>(null);

  const calculateDDay = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const target = new Date('2024-10-26');
    target.setHours(0, 0, 0, 0);
    const differenceInTime = target.getTime() - today.getTime();
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
    setDDay(differenceInDays);
  };

  useEffect(() => {
    calculateDDay();
  }, []);

  return (
    <InnerLayout>
      <StyledCalendar>
        <p className="current-date">2024년 10월</p>
        <div className="calendar">
          <ul className="weeks">
            <li>일</li>
            <li>월</li>
            <li>화</li>
            <li>수</li>
            <li>목</li>
            <li>금</li>
            <li>토</li>
          </ul>
          <ul className="days">
            <li className="inactive">29</li>
            <li className="inactive">30</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
            <li>11</li>
            <li>12</li>
            <li>13</li>
            <li>14</li>
            <li>15</li>
            <li>16</li>
            <li>17</li>
            <li>18</li>
            <li>19</li>
            <li>20</li>
            <li>21</li>
            <li>22</li>
            <li>23</li>
            <li>24</li>
            <li>25</li>
            <li className="active">26</li>
            <li>27</li>
            <li>28</li>
            <li>29</li>
            <li>30</li>
            <li>31</li>
            <li className="inactive">1</li>
            <li className="inactive">2</li>
          </ul>
        </div>
      </StyledCalendar>
      <StyledCounting>
        준성 ❤ 민혜의 결혼식이 {dDay}일 남았습니다.
      </StyledCounting>
      {/* <StyledPlace>
        <p>2024년 10월 26일 토요일 낮 12시 30분</p>
        <p>힐스카이 웨딩&컨벤션 9층 힐시크릿홀</p>
      </StyledPlace> */}
    </InnerLayout>
  );
};

export default MainCalendar;

const StyledCalendar = styled.div`
  align-items: center;
  justify-content: center;
  margin-bottom: 36px;
  .current-date {
    text-align: center;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 32px;
  }
  .calendar ul {
    display: flex;
    list-style: none;
    flex-wrap: wrap;
    text-align: center;
  }
  .calendar .weeks li {
    font-weight: 500;
  }
  .calendar .days {
    margin-bottom: 20px;
  }
  .calendar ul li {
    width: calc(100% / 7);
    position: relative;
  }
  .calendar .days li {
    z-index: 1;
    margin-top: 30px;
    cursor: pointer;
  }

  .days li.inactive {
    color: #aaa;
  }
  .days li.active {
    color: #fff;
  }
  .calendar .days li::before {
    position: absolute;
    content: '';
    height: 40px;
    width: 40px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    z-index: -1;
  }
  .days li:hover::before {
    background: #f2f2f2;
  }
  .days li.active::before {
    background: #fa4f4f;
  }
`;

const StyledPlace = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 24px;
  gap: 16px;
  margin-bottom: 16px;
  border: 1px solid ${({ theme }) => theme.color.gray200};
`;

// const StyledAddress = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   ${({ theme }) => css`
//     color: ${theme.color.gray800};
//     ${theme.typography.content1Bold}
//   `}
// `;

const StyledCounting = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;
