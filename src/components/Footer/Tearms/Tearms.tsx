import { GermanMainLogo } from "assets"
import Header from "components/Header"
import Footer from "components/Footer"
import { MainLowerPartContainer, TermsOUcontainer, TermsHeader, TermsSubHeader, TermsText } from "./styles"
import MainUpperPart from "components/MainUpperPart"

import {
  BerlinImg,
  BerlinLogo,
  MunichLogo,
  FrankfurtLogo,
  DuesseldorfLogo,
  HamburgLogo,
} from "assets"

function Tearms() {

  return (
    <>
      <Header
        logoImgDescr={{ src: GermanMainLogo, alt: "GermanMainLogo" }}
        city="Берлин"
      />
      <MainUpperPart
        firstImgDescr={{ src: BerlinLogo, alt: "BerlinLogo" }}
        secondImgDescr={{ src: MunichLogo, alt: "MunichLogo" }}
        thirdImgDescr={{ src: FrankfurtLogo, alt: "FrankfurtLogo" }}
        fourthImgDescr={{ src: DuesseldorfLogo, alt: "DuesseldorfLogo" }}
        fifthImgDescr={{ src: HamburgLogo, alt: "HamburgLogo" }}
        firstImgTitle="Берлин"
        secondImgTitle="Мюнхен"
        thirdImgTitle="Франкфурт"
        fourthImgTitle="Дюссельдорф"
        fifthImgTitle="Гамбург"
      />
      <MainLowerPartContainer>
          <TermsOUcontainer>
            <TermsHeader>Условия использования</TermsHeader>
            <TermsSubHeader>1. Введение</TermsSubHeader>
            <TermsText>
              Добро пожаловать на наш сайт. Если вы продолжаете пользоваться этим
              сайтом, вы соглашаетесь соблюдать и быть связанным следующими условиями
              использования.
            </TermsText>
            <TermsSubHeader>2. Информация о копирайте</TermsSubHeader>
            <TermsText>
              Этот сайт и его содержимое являются собственностью нас - © Team 24. Все
              права защищены.
            </TermsText>
            <TermsSubHeader>3. Отказ от ответственности</TermsSubHeader>
            <TermsText>
              Информация на этом сайте предоставляется "как есть". Мы не предоставляем
              никаких гарантий или заявлений относительно точности или полноты
              информации на этом сайте.
            </TermsText>
            <TermsSubHeader>4. Ограничение ответственности</TermsSubHeader>
            <TermsText>
              Мы не несем ответственности за любые потери или ущерб, возникшие в
              результате использования этого сайта.
            </TermsText>
            <TermsSubHeader>5. Применимое законодательство</TermsSubHeader>
            <TermsText>
              Ваше использование этого сайта и любые споры, возникающие из такого
              использования, подчиняются законам Германии.
            </TermsText>
          </TermsOUcontainer>
      </MainLowerPartContainer>
      <Footer />
    </>
  )
}

export default Tearms