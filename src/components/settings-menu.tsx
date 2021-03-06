/** @jsx jsx */
import { jsx } from "theme-ui"
import {
  DropdownMenu,
  DropdownMenuButton,
  DropdownMenuItems,
  DropdownMenuItemsProps,
} from "gatsby-interface"
import { MdMoreHoriz } from "react-icons/md"

export function SettingsMenu(props: DropdownMenuItemsProps): JSX.Element {
  return (
    <DropdownMenu>
      <DropdownMenuButton
        sx={{
          background: `none`,
          border: `none`,
          // Give ourselves a big hit target, but align as if we didn't
          p: 4,
          marginRight: -4,
          my: -4,
          cursor: `pointer`,
          display: `flex`,
          alignItems: `center`,
          justifySelf: `flex-end`,
        }}
      >
        <MdMoreHoriz size={24} sx={{ color: `grey.50` }} />
      </DropdownMenuButton>
      <DropdownMenuItems sx={{ width: `50vw` }} {...props} />
    </DropdownMenu>
  )
}
