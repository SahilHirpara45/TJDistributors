import styled from 'styled-components'
import { CSidebar, CHeader, CDropdownToggle } from '@coreui/react'

export const CSidebarStyled = styled(CSidebar)`
  background: #e82225;
  width: 225px;

  /* Hide scrollbar for Chrome, Safari and Opera */
  .sidebar-nav::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  .sidebar-nav {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  .sidebar-brand {
    background: transparent;
    flex: 0 0 6rem;
  }

  .sidebar-nav .nav-link {
    font-weight: 400;
    font-size: 15px;
    color: #f8bdbe;
    gap: 12px;
    white-space: normal;

    &:hover {
      svg {
        fill: #ffffff;
        filter: drop-shadow(1px 4px 4px rgba(0, 0, 0, 0.15));
      }
    }
    &:focus {
      svg {
        fill: #ffffff;
        filter: drop-shadow(1px 4px 4px rgba(0, 0, 0, 0.15));
      }
    }
  }

  .sidebar-nav .nav-link.active {
    color: white;

    svg {
      fill: #ffffff;
      filter: drop-shadow(1px 4px 4px rgba(0, 0, 0, 0.15));
    }
  }

  .sidebar-nav .nav-link:hover,
  .sidebar-nav .nav-link:focus,
  .sidebar-nav .nav-link:active {
    color: #ffffff;
  }

  .sidebar-nav .nav-group.show {
    background: none;
  }
  .sidebar-nav .sidebar-icon.show .nav-group-items .nav-item .nav-link{
    padding-left: 2rem;
    white-space: nowrap;
  }

  .sidebar-brand img {
    height: 28px;
  }

  .nav-item {
    position: relative;
  }

  .active_svg {
    display: none;
    position: absolute;
  }

  .sidebar-nav .nav-link:focus .active_svg,
  .sidebar-nav .nav-link.active .active_svg {
    display: block;
    left: 0;
  }

  @media (max-width: 1599px) {
    .sidebar-nav .nav-link {
      font-size: 14px;
    }

    .sidebar-brand img {
      height: 25px;
    }
  }
`

export const CHeaderStyled = styled(CHeader)`
  background: #909090;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.06);
  min-height: 3.8rem;
  padding: 0;

  .toggle_icon {
    color: white;
  }
`

export const CDropdownToggleStyled = styled(CDropdownToggle)`
  display: flex;
  align-items: center;
  gap: 12px;

  .user_name {
    font-weight: 400;
    font-size: 14px;
    color: #ffffff;
  }

  .avatar {
    width: 34px;
    height: 34px;
  }

  @media (max-width: 767px) {
    .user_name {
      display: none;
    }
  }
`

export const StyledNavLink = styled.div``
