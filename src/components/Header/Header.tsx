import { Link, useNavigate, useLocation } from "react-router-dom"
import { useState, useEffect, MouseEvent } from "react"
import { Menu, MenuItem } from "@mui/material"
import { AccountCircle } from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux"

import ImageComponent from "../../components/ImageComponent"
// import LogoComponent from "components/LogoComponent"
// import WeatherComponent from "components/WeatherComponent"

import {
  MainContainer,
  HeaderUpperContainer,
  HeaderMiddleContainer,
  HeaderLowerContainer,
  LogoContainer,
  LogoTextContainer,
  TitleContainer,
  HeaderSerchContainer,
  ImageComponentWrap,
  HeaderSearch,
  HeaderSignInContainer,
  HeaderSignInText,
  NavListLeft,
  NavItem,
  NavigationLink,
  NavListRight,
  TitleLinkContainer,
  ImageWrap,
  HeaderDropdownContainer,
  ButtonProf,
  ButtonCity,
} from "./styles"
import { SearchIcon } from "../../assets"
// import { SearchIcon } from "assets";
// import { userActions } from "../../store/user/userSlice";
// import { userSelectors } from "../../store/user/selectors";
// import { searchActions } from "../../store/search/searchSlice";
// import { SearchResult } from "store/search/types"



function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation() 

  // const { authenticated, name, authorities } = useSelector(userSelectors)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [anchorElCity, setAnchorElCity] = useState<null | HTMLElement>(null)

  const [anchorEl1, setAnchorEl1] = useState<null | HTMLElement>(null)
  const [anchorEl2, setAnchorEl2] = useState<null | HTMLElement>(null)

  const [query, setQuery] = useState<string>("")
  
    //--------------------------------
    // useEffect(() => {
    //   async function fetchUserData() {
    //     try {
    //       // Получаем информацию о пользователе после успешной аутентификации
    //       const userInfoResponse = await instance.get("/auth/get_auth_info")
    //       // Сохраняем информацию о пользователе в Redux
    //       dispatch(userActions.setUserInfo(userInfoResponse.data))
    //     } catch (error) {
    //       console.error("Error fetching user data:", error)
    //     }

    //   }
    //   fetchUserData()
    // }, [])
  //-------------------------------------
  // const handleLogout = async () => {
  //   try {
  //     const response = await instance.get("/auth/logout")
  //     console.log("Logout successful:", response.data)
  //     dispatch(userActions.clearUserInfo())
  //     if (location.pathname === "/user_login/user_account") {
  //       navigate("/")
  //     }
  //   } catch (error) {
  //     console.error("Error logging out:", error)
  //   }
  // }

  // const handleUserAccount = () => {
  //   navigate("/user_login/user_account")
  // }


  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClickCity = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorElCity(event.currentTarget)
  }

  const handleClick1 = (event: any) => {
    setAnchorEl1(event.currentTarget)
  }

  const handleClick2 = (event: any) => {
    setAnchorEl2(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleCloseCity = () => {
    setAnchorElCity(null)
  }

  const handleClose1 = () => {
    setAnchorEl1(null)
  }

  const handleClose2 = () => {
    setAnchorEl2(null)
  }
  
  const handlePhysicians = () => {
    navigate(`/doctors/physicians`)
    handleClose1()
  }

  const handleStomatologists = () => {
    navigate(`/doctors/stomatologists`)
    handleClose1()
  }

  const handlePediatrists = () => {
    navigate(`/doctors/pediatrists`)
    handleClose1()
  }

  const handleOrthopedists = () => {
    navigate(`/doctors/orthopedists`)
    handleClose1()
  }

  const handleCardiologists = () => {
    navigate(`/doctors/cardiologists`)
    handleClose1()
  }

  const handleDermatologists = () => {
    navigate(`/doctors/dermatologists`)
    handleClose1()
  }

  const handleLegalServices = () => {
    navigate(`/services/legal_services`)
    handleClose2()
  }

  const handleTranslators = () => {
    navigate(`/services/translators`)
    handleClose2()
  }

  const handleHairBeauty = () => {
    navigate(`/services/hair_beauty`)
    handleClose2()
  }

  

  // const handleSearch = async () => {
  //   try {
  //     const searchResponse = await instance.get<SearchResult[]>(
  //       `/search?keywords=${query}`
  //     );
  //     // Сохраняем результаты поиска в Redux
  //     dispatch(searchActions.setSearchResults(searchResponse.data));
  //     // Переходим на страницу с результатами поиска
  //     navigate("/search");
  //   } catch (error) {
  //     console.error("Ошибка при выполнении поиска:", error);
  //   }
  // };
  
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  // const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (event.key === "Enter") {
  //     handleSearch();
  //   }
  // };
  
  return (
    <MainContainer>
      <HeaderUpperContainer>
        <HeaderSerchContainer>
          <ImageComponentWrap>
            <ImageComponent src={SearchIcon} />
          </ImageComponentWrap>
          {/* <HeaderSearch type="search" placeholder="Поиск" name="Search" /> */}
          <HeaderSearch
            type="search"
            placeholder="search"
            name="Search"
            value={query}
            onChange={handleInputChange}
            // onKeyDown={handleKeyPress}
          />
        </HeaderSerchContainer>

        <HeaderDropdownContainer className="header-dropdown">
        </HeaderDropdownContainer>

        {/* {authenticated ? (
          <div>
            <ButtonProf onClick={handleClick} startIcon={<AccountCircle />}>
              Профиль
            </ButtonProf>
            <Menu
              id="profile-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {!authorities.some(
                authority => authority.authority === "ROLE_ADMIN",
              ) && (
                <MenuItem onClick={handleUserAccount}>Личный кабинет</MenuItem>
              )}

              <MenuItem onClick={handleLogout}>Выйти из аккаунта</MenuItem>
            </Menu>
          </div>
        ) : ( */}
          <HeaderSignInContainer>
            <HeaderSignInText to="/login">
              <ButtonProf>Авторизация</ButtonProf>
            </HeaderSignInText>
          </HeaderSignInContainer>
        {/* )} */}
      </HeaderUpperContainer>
      <HeaderMiddleContainer>
        <LogoContainer>
        </LogoContainer>
        <TitleContainer>
          <TitleLinkContainer to="/">Интернет-магазин</TitleLinkContainer>
        </TitleContainer>
      </HeaderMiddleContainer>
      <HeaderLowerContainer>
        <NavListLeft>
          <NavItem>
            <NavigationLink as={Link} to="/">
              Новости
            </NavigationLink>
          </NavItem>
          <NavItem>
            <NavigationLink as={Link} to="/general-info">
              Общая информация
            </NavigationLink>
          </NavItem>
        </NavListLeft>
  
          <NavListRight>
            <NavItem>
              <NavigationLink onClick={handleClick1}>Врачи</NavigationLink>
              <Menu
                id="doctors-menu"
                anchorEl={anchorEl1}
                open={Boolean(anchorEl1)}
                onClose={handleClose1}
              >
                <MenuItem onClick={handlePhysicians}>Терапевты</MenuItem>
                <MenuItem onClick={handlePediatrists}>Педиатры</MenuItem>
                <MenuItem onClick={handleStomatologists}>Стоматологи</MenuItem>
                <MenuItem onClick={handleCardiologists}>Кардиологи</MenuItem>
                <MenuItem onClick={handleOrthopedists}>Ортопеды</MenuItem>
                <MenuItem onClick={handleDermatologists}>Дерматологи</MenuItem>
              </Menu>
            </NavItem>
            <NavItem>
              <NavigationLink as={Link} to={`/children`}>
                Дети
              </NavigationLink>
            </NavItem>
            <NavItem>
              <NavigationLink as={Link} to={`/shops`}>
                Магазины
              </NavigationLink>
            </NavItem>
            <NavItem>
              <NavigationLink as={Link} to={`/cafes-restaurants`}>
                Кафе и рестораны
              </NavigationLink>
            </NavItem>
            <NavItem>
              <NavigationLink onClick={handleClick2}>Услуги</NavigationLink>
              <Menu
                anchorEl={anchorEl2}
                open={Boolean(anchorEl2)}
                onClose={handleClose2}
              >
                <MenuItem onClick={handleLegalServices}>Юристы</MenuItem>
                <MenuItem onClick={handleTranslators}>Переводчики</MenuItem>
                <MenuItem onClick={handleHairBeauty}>
                  Парикмахеры и косметические салоны
                </MenuItem>
              </Menu>
            </NavItem>
          </NavListRight>
      </HeaderLowerContainer>
    </MainContainer>
  )
}

export default Header;