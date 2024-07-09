import { Global, css } from '@emotion/react';
import theme from '@src/styles/theme';
// import 'react-loading-skeleton/dist/skeleton.css';

function GlobalStyle() {
  return (
    <Global
      styles={css`
        * {
          /* font-family: 'Pretendard', Arial, Helvetica, sans-serif,
            'Apple SD Gothic Neo', -apple-system, 'Segoe UI', 'Oxygen'; */
          -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
        }
        html,
        body,
        div,
        span,
        applet,
        object,
        iframe,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        blockquote,
        pre,
        a,
        abbr,
        acronym,
        address,
        big,
        cite,
        code,
        del,
        dfn,
        em,
        img,
        ins,
        kbd,
        q,
        s,
        samp,
        small,
        strike,
        strong,
        sub,
        sup,
        tt,
        var,
        b,
        u,
        i,
        center,
        dl,
        dt,
        dd,
        ol,
        ul,
        li,
        fieldset,
        form,
        label,
        legend,
        table,
        caption,
        tbody,
        tfoot,
        thead,
        tr,
        th,
        td,
        article,
        aside,
        canvas,
        details,
        embed,
        figure,
        figcaption,
        footer,
        header,
        hgroup,
        menu,
        nav,
        output,
        ruby,
        section,
        summary,
        time,
        mark,
        audio,
        video,
        input {
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 100%;
          font-family: inherit;
          vertical-align: baseline;
          box-sizing: border-box;
        }
        article,
        aside,
        details,
        figcaption,
        figure,
        footer,
        header,
        hgroup,
        menu,
        nav,
        section {
          display: block;
        }
        html,
        body,
        #root,
        .App {
          min-height: 100%;
        }
        body {
          line-height: 1;
          font-family: 'Pretendard', Arial, Helvetica, sans-serif,
            'Apple SD Gothic Neo', -apple-system, 'Segoe UI', 'Oxygen';
          min-width: 320px;
          background-color: ${theme.color.gray0};
          @media screen and (min-width: 500px) {
            max-width: 500px;
            margin: 0 auto;
            nav {
              max-width: 500px;
            }
          }
          // swiper style
          .swiper {
            width: 100%;
            height: 100%;
          }
          .swiper-wrapper {
            width: 100%;
            height: 100%;
          }
          .swiper-slide {
            width: auto;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .slide-image {
            height: 400px;
            width: auto;
          }
          /*
          // swiper bullet style
          .swiper-pagination {
            position: static;
            display: flex;
            justify-content: center;
            gap: 4px;
            margin-top: 8px;
          }
          .swiper-pagination-bullet {
            width: 5px;
            height: 5px;
            margin: 0px !important;
            background: ${theme.color.gray100};
            opacity: 1;
          }
          .swiper-pagination-bullet-active {
            background: #26282b;
          }
          // swiper scrollbar style
          .swiper-scrollbar-gray {
            position: absolute;
            display: flex;
            left: 50%;
            transform: translateX(-50%);
            z-index: 10;
            width: 90%;
            bottom: 16px;
            height: 2px;
            background-color: rgba(180, 185, 192, 0.3);
            border-radius: 100px;
          }

          .swiper-scrollbar-gray-bottom8 {
            position: absolute;
            display: flex;
            left: 50%;
            transform: translateX(-50%);
            z-index: 10;
            width: 90%;
            bottom: 8px;
            height: 2px;
            background-color: rgba(180, 185, 192, 0.3);
            border-radius: 100px;
          }

          .swiper-scrollbar-white {
            position: absolute;
            display: flex;
            left: 50%;
            transform: translateX(-50%);
            z-index: 10;
            width: 90%;
            bottom: 16px;
            height: 2px;
            background-color: rgba(255, 255, 255, 0.3);
            border-radius: 100px;
          }

          .swiper-scrollbar-white-bottom8 {
            position: absolute;
            display: flex;
            left: 50%;
            transform: translateX(-50%);
            z-index: 10;
            width: 90%;
            bottom: 8px;
            height: 2px;
            background-color: rgba(255, 255, 255, 0.3);
            border-radius: 100px;
          } */

          .bottom8 {
            bottom: 8px;
          }

          .swiper-scrollbar-drag-gray {
            position: absolute;
            display: flex;
            z-index: 10;
            height: 2px;
            background-color: ${theme.color.gray300};
            border-radius: 100px;
          }

          .swiper-scrollbar-drag-white {
            position: absolute;
            display: flex;
            z-index: 10;
            height: 2px;
            background-color: ${theme.color.gray0};
            border-radius: 100px;
          }
          .swiper-button-prev,
          .swiper-button-next {
            width: 5px;
            color: ${theme.color.gray800};
            top: 25%;
            &::after {
              font-size: 24px;
            }
          }

          // react-zoom-pan-pinch style
          .react-transform-wrapper {
            width: 100% !important;
            height: 100% !important;
          }
          .react-transform-component {
            display: block;
            width: 100% !important;
            height: 100% !important;
          }

          .react-transform-element {
            width: 100% !important;
            height: 100% !important;
          }
        }
        ol,
        ul {
          list-style: none;
        }
        blockquote,
        q {
          quotes: none;
        }
        blockquote:before,
        blockquote:after,
        q:before,
        q:after {
          content: '';
          content: none;
        }
        table {
          border-collapse: collapse;
          border-spacing: 0;
        }
        a {
          color: inherit;
          text-decoration: inherit;
          &:hover,
          &:active {
            color: inherit;
            text-decoration: inherit;
          }
        }
        input {
          appearance: none;
          border: none;
          outline: none;
          background: none;
          padding: 0;
          margin: 0;
          font-family: inherit;
          font-size: inherit;
          color: inherit;
          line-height: inherit;
        }
        input[type='number']::-webkit-outer-spin-button,
        input[type='number']::-webkit-inner-spin-button {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
        }
        button {
          background: inherit;
          border: none;
          box-shadow: none;
          border-radius: 0;
          padding: 0;
          overflow: visible;
          cursor: pointer;
          color: inherit;
        }
        select {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          background-color: transparent;
          color: ${theme.color.gray800};
          ${theme.typography.content2}
          &:focus {
            outline: none;
          }
        }
        // 스크린 리더기에서만 읽히도록
        .srOnly {
          border: 0 !important;
          clip: rect(1px, 1px, 1px, 1px) !important;
          -webkit-clip-path: inset(50%) !important;
          clip-path: inset(50%) !important;
          height: 1px !important;
          overflow: hidden !important;
          padding: 0 !important;
          position: absolute !important;
          width: 1px !important;
          white-space: nowrap !important;
        }
        .alignCenter {
          text-align: center;
        }
        .alignRight {
          text-align: right;
        }
        .iosSafeArea {
          width: 100%;
          padding-bottom: constant(safe-area-inset-bottom);
          padding-bottom: env(safe-area-inset-bottom);
        }
        .link {
          color: ${theme.color.lightBlue500};
          &:hover {
            color: ${theme.color.lightBlue500};
            text-decoration: underline;
            cursor: pointer;
          }
        }
        .material-symbols-rounded {
          &.fill {
            font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          }
        }
        .fixedLayout {
          position: fixed;
          width: 100%;
          height: 100%;
          @media screen and (min-width: 500px) {
            max-width: 500px;
            left: 50%;
            transform: translateX(-50%);
          }
        }

        // react-datepicker style
        /* .react-datepicker-wrapper,
        .react-datepicker__input-container {
          display: block;
        }

        .react-datepicker-wrapper .react-datepicker__input-container input {
          width: 100%;
        } */
      `}
    />
  );
}

export default GlobalStyle;
