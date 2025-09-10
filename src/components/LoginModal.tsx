import React, { useState } from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.18);
  padding: 2rem 2.5rem;
  min-width: 340px;
  max-width: 90vw;
  text-align: center;
`;

const OptionButton = styled.button`
  background: #0ea5e9;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.75rem 2rem;
  margin: 1rem 0.5rem;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #0369a1;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

export default function LoginModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [selected, setSelected] = useState<"buyer" | "supplier" | null>(null);

  if (!open) return null;

  return (
    <ModalOverlay>
      <ModalContent style={{ position: "relative" }}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        {!selected ? (
          <>
            <h2 style={{ fontWeight: 700, fontSize: "1.5rem", marginBottom: "1.5rem" }}>Login as</h2>
            <OptionButton onClick={() => setSelected("buyer")}>Buyer</OptionButton>
            <OptionButton onClick={() => setSelected("supplier")}>Supplier</OptionButton>
          </>
        ) : selected === "buyer" ? (
          <>
            <h2 style={{ fontWeight: 700, fontSize: "1.3rem", marginBottom: "1rem" }}>Buyer Login</h2>
            <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <input type="email" placeholder="Buyer Email" style={{ padding: "0.7rem", borderRadius: "6px", border: "1px solid #e5e7eb" }} />
              <input type="password" placeholder="Password" style={{ padding: "0.7rem", borderRadius: "6px", border: "1px solid #e5e7eb" }} />
              <OptionButton type="submit">Login</OptionButton>
            </form>
          </>
        ) : (
          <>
            <h2 style={{ fontWeight: 700, fontSize: "1.3rem", marginBottom: "1rem" }}>Supplier Login</h2>
            <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <input type="email" placeholder="Supplier Email" style={{ padding: "0.7rem", borderRadius: "6px", border: "1px solid #e5e7eb" }} />
              <input type="password" placeholder="Password" style={{ padding: "0.7rem", borderRadius: "6px", border: "1px solid #e5e7eb" }} />
              <OptionButton type="submit">Login</OptionButton>
            </form>
          </>
        )}
      </ModalContent>
    </ModalOverlay>
  );
}
