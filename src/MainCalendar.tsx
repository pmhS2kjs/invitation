import styled from '@emotion/styled';

const MainCalendar = () => {
  return (
    <>
      <StyeldCalendar>
        <p className="current-date">September 2022</p>
        <div className="calendar">
          <ul className="weeks">
            <li>Sun</li>
            <li>Mon</li>
            <li>Tue</li>
            <li>Wed</li>
            <li>Thu</li>
            <li>Fri</li>
            <li>Sat</li>
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
            <li>26</li>
            <li>27</li>
            <li>28</li>
            <li>29</li>
            <li>30</li>
            <li>31</li>
            <li className="inactive">1</li>
            <li className="inactive">2</li>
          </ul>
        </div>
      </StyeldCalendar>
      <StyledPlace>
        <p>장소</p>
        <p>시간</p>
      </StyledPlace>
      <StyledAddress>주소</StyledAddress>
    </>
  );
};

export default MainCalendar;

const StyeldCalendar = styled.div`
  align-items: center;
  justify-content: center;
  .current-date {
    font-size: 24px;
    font-weight: 600;
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
    /*#8*/
    width: calc(100% / 7);
    /*#9*/
    position: relative;
  }
  .calendar .days li {
    /*#10*/
    z-index: 1;
    margin-top: 30px;
    cursor: pointer;
  }

  /*#11*/
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
    background: #008aff;
  }
`;

const StyledPlace = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.color.gray200};
`;

const StyledAddress = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
