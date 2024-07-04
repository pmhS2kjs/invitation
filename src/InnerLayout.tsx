import styled from '@emotion/styled';

interface Option {
  children: React.ReactNode;
  className?: string;
}

const InnerLayout = ({ children, className }: Option) => {
  return <Section className={className}>{children}</Section>;
};

export default InnerLayout;

const Section = styled.section`
  padding: 32px 16px;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  h2 {
    margin-bottom: 16px;
  }
`;
