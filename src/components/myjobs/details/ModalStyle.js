import styled from "styled-components";
import { motion } from "framer-motion";

export const ModalBox = styled(motion.div)`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  top: 50%;
`;

export const ModalContent = styled(motion.div)`
  padding: 5px;
`;

export const ModalContainer = styled.div`
  height: 100vh;
  background: #111;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ToggleBtn = styled(motion.button)`
  cursor: pointer;
  font-size: 20px;
  color: #fff;
  padding: 0.5rem 0.8rem;
  margin-top: 3rem;
  background: #3bb75e;
  text-decoration: none;
  border: none;
  border-radius: 50px;
`;
