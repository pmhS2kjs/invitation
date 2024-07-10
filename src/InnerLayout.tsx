import { css } from '@emotion/react';
import styled from '@emotion/styled';

type LayoutType = 'normal' | 'full';
interface Option {
  children: React.ReactNode;
  className?: string;
  layout?: LayoutType;
}

const InnerLayout = ({ children, className, layout = 'normal' }: Option) => {
  return (
    <Section className={className} layout={layout}>
      {children}
    </Section>
  );
};

export default InnerLayout;

type SectionProps = {
  layout: string;
};

const Section = styled.section<SectionProps>`
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  h2 {
    margin-bottom: 16px;
  }
  ${({ layout }) => {
    switch (layout) {
      case 'normal':
        return css`
          padding: 64px 16px;
        `;
      case 'full':
        return css`
          padding: 0px;
        `;
      default:
        return css`
          padding: 64px 16px;
        `;
    }
  }};
`;
