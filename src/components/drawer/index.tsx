import cn from "classnames";
import styles from "./drawer.module.scss";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useMountTransition } from "./use-mount-transition";
import FocusTrap from "focus-trap-react";

interface IProps {
  isOpen: boolean;
  children: React.ReactNode;
  className?: string;
  onClose: () => void;
  position?: "right" | "left" | "top" | "bottom";
  removeWhenClosed?: boolean;
}

function createPortalRoot() {
  const drawerRoot = document.createElement("div");
  drawerRoot.setAttribute("id", "drawer-root");
  return drawerRoot;
}

export const Drawer = ({
  isOpen,
  children,
  className,
  onClose,
  position,
  removeWhenClosed = true,
}: IProps) => {
  const bodyRef = useRef(document.querySelector("body"));
  const portalRootRef = useRef(
    document.getElementById("drawer-root") || createPortalRoot()
  );
  const isTransitioning = useMountTransition({
    isMounted: isOpen,
    unmountDelay: 300,
  });
  useEffect(() => {
    bodyRef.current?.appendChild(portalRootRef.current);
    const portal = portalRootRef.current;
    const bodyEl = bodyRef.current;
    return () => {
      portal.remove();
      if (bodyEl) {
        bodyEl.style.overflow = "";
      }
    };
  }, []);
  useEffect(() => {
    const updatePageScroll = () => {
      if (bodyRef.current) {
        if (isOpen) {
          bodyRef.current.style.overflow = "hidden";
        } else {
          bodyRef.current.style.overflow = "";
        }
      }
    };

    updatePageScroll();
  }, [isOpen]);

  useEffect(() => {
    const onKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", onKeyPress);
    }
    return () => {
      document.removeEventListener("keydown", onKeyPress);
    };
  }, [isOpen, onClose]);

  if (!isTransitioning && removeWhenClosed && !isOpen) {
    return null;
  }

  return createPortal(
    <FocusTrap active={isOpen}>
      <div
        aria-hidden={isOpen ? "false" : "true"}
        className={cn(styles["drawer-container"], {
          [styles.open]: isOpen,
          [styles.in]: isTransitioning,
          className,
        })}
      >
        <div
          className={cn(styles.drawer, styles[position || ""])}
          role="dialog"
        >
          {children}
        </div>
        <div className={styles.backdrop} onClick={onClose} />
      </div>
    </FocusTrap>,
    portalRootRef.current
  );
};
