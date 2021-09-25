import React from "react";
import { renderWithTheme } from "../../testHelpers";
import BalanceInput from "../../components/BalanceInput/BalanceInput";

const handleChange = jest.fn();

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<BalanceInput value="14" currencyValue="15 USD" onUserInput={handleChange} />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      .c3 {
      color: #f7c668;
      font-size: 12px;
      font-weight: 400;
      line-height: 1.5;
      font-size: 12px;
      text-align: right;
    }

    .c1 {
      background-color: #424242;
      border: 0;
      border-radius: 16px;
      box-shadow: inset 0px 2px 2px -1px rgba(74,74,104,0.1);
      color: #fff;
      display: block;
      font-size: 16px;
      height: 40px;
      outline: 0;
      padding: 0 16px;
      width: 100%;
    }

    .c1::-webkit-input-placeholder {
      color: #f7c668;
    }

    .c1::-moz-placeholder {
      color: #f7c668;
    }

    .c1:-ms-input-placeholder {
      color: #f7c668;
    }

    .c1::placeholder {
      color: #f7c668;
    }

    .c1:disabled {
      background-color: rgba(255,255,255,0.12);
      box-shadow: none;
      color: rgba(255,255,255,0.5);
      cursor: not-allowed;
    }

    .c1:focus:not(:disabled) {
      box-shadow: 0px 0px 0px 1px #ab802e,0px 0px 0px 4px rgba(245,184,67,0.6);
    }

    .c0 {
      background-color: #424242;
      border: 1px solid none;
      border-radius: 16px;
      box-shadow: inset 0px 2px 2px -1px rgba(74,74,104,0.1);
      padding: 8px 16px;
    }

    .c2 {
      background: transparent;
      border-radius: 0;
      box-shadow: none;
      padding-left: 0;
      padding-right: 0;
      text-align: right;
    }

    .c2::-webkit-input-placeholder {
      color: #f7c668;
    }

    .c2::-moz-placeholder {
      color: #f7c668;
    }

    .c2:-ms-input-placeholder {
      color: #f7c668;
    }

    .c2::placeholder {
      color: #f7c668;
    }

    .c2:focus:not(:disabled) {
      box-shadow: none;
    }

    <div
        class="c0"
      >
        <input
          class="c1 c2"
          inputmode="decimal"
          min="0"
          pattern="^[0-9]*[.,]?[0-9]{0,18}$"
          placeholder="0.0"
          scale="md"
          value="14"
        />
        <div
          class="c3"
          color="textSubtle"
          font-size="12px"
        >
          15 USD
        </div>
      </div>
    </DocumentFragment>
  `);
});
