import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import useLayout from "~/components/Layout/hooks/use-layout-context";
import { MenuButtonProps } from "./types";

const MenuButton = ({ ...rest }: MenuButtonProps) => {
  const { layoutState, setLayoutState } = useLayout();
  const { isMenuOpen } = layoutState;

  function handleToggleMenu() {
    setLayoutState({
      ...layoutState,
      isMenuOpen: !isMenuOpen,
    });
  }

  return (
    <IconButton
      size="large"
      aria-label="Menu"
      onClick={handleToggleMenu}
      {...rest}
    >
      {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
    </IconButton>
  );
};
export default MenuButton;
