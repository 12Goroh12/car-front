import { FC } from "react";
import MenuItem from "../MenuItem";
import { IUser } from "../../../types/user";
import { Email, MenuBlock, MenuName, Modal, Name } from "./style";

interface IMenuAdminProps {
  info: IUser;
}

const MenuAdmin: FC<IMenuAdminProps> = ({ info }) => {
  const nameAdmin = info?.name.slice(0, 1);

  return (
    <Modal>
      <MenuBlock>
        <MenuName>
          <Name>{nameAdmin}</Name>
          <Email>
            Email: <span>{info?.email}</span>
          </Email>
        </MenuName>
        <MenuItem />
      </MenuBlock>
    </Modal>
  );
};

export default MenuAdmin;
