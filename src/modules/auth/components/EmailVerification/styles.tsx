import styled, { css } from "styled-components";

// Components
import FormWrap, { InputsWrap as _InputsWrap } from "../FormWrap";
import _Title from "../Title";
import _SubTitle from "../SubTitle";
import _Alert, { AlertProps } from "@/shared/ui/Alert";

// Re export types
export type { AlertProps };

// Styled components
export const Wrap = styled(FormWrap)``;
export const Title = styled(_Title)``;
export const SubTitle = styled(_SubTitle)``;
export const Alert = styled(_Alert)``;
