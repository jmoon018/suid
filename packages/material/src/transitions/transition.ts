import {
  TransitionProps as _TransitionProps,
  TransitionActions,
} from "@suid/base/Transition";
import StyleProps from "@suid/system/styleProps";

export type TransitionHandlerKeys =
  | "onEnter"
  | "onEntering"
  | "onEntered"
  | "onExit"
  | "onExiting"
  | "onExited";
export type TransitionHandlerProps = Pick<
  _TransitionProps,
  TransitionHandlerKeys
>;

export interface EasingProps {
  easing: string | { enter?: string; exit?: string };
}

export type TransitionKeys =
  | "in"
  | "mountOnEnter"
  | "unmountOnExit"
  | "timeout"
  | "easing"
  | "addEndListener"
  | TransitionHandlerKeys;

export interface TransitionProps
  extends TransitionActions,
    Partial<Pick<_TransitionProps & EasingProps, TransitionKeys>> {
  style?: StyleProps;
}
