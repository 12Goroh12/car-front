import { FC } from "react";
import MenuItem from "../MenuItem";
import { Email, MenuBlock, MenuName, Modal, Name } from "./style";

interface IMenuAdminProps {
  email: string;
  name: string;
}

const MenuAdmin: FC<IMenuAdminProps> = ({ email, name }) => {
  const nameAdmin = name.slice(0, 1);

  return (
    <Modal>
      <MenuBlock>
        <MenuName>
          <Name>{nameAdmin}</Name>
          <Email>
            Email: <span>{email}</span>
          </Email>
        </MenuName>
        <MenuItem />
      </MenuBlock>
    </Modal>
  );
};

export default MenuAdmin;
